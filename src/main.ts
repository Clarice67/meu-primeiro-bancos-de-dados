import express from "express"
import { db, firestore } from '../bancos-de-dados/firebase';
import e from "express";
import { Firestore } from "firebase/firestore";
import cors from "cors"
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use(cors({
   origin: "*",
   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}))
   

app.get("/", (req, res) => {
   res.send(" A minha primeira API")
})

app.post("/formulario", async (req, res) => {
   const nome = req.body.nome
   const autor = req.body.autor
   const tituloLivro = req.body.tituloLivro
   const genero = req.body.genero

   try {
      const docRef = await firestore.addDoc(firestore.collection(db, 'formulario'), {
         nome: nome,
         autor: autor,
         tituloLivro: tituloLivro,
         genero: genero,
      })

      res.send("Resposta enviada com sucesso:" + docRef.id);
   } catch (error) {
      console.log(e)
      res.status(500).send(e)
   }
})

app.get("/listarFormulario", async (req, res) => {
   try {
      const formulario = await firestore.getDocs(firestore.collection(db, "formulario"))

      const formularioLista = formulario.docs.map((doc) => ({
         id: doc.id,
         ...doc.data(),
      }))


console.log(formularioLista);

      
     res.send(formularioLista);

   } catch (e) {
      console.log(" Erro ao Listar formulario:" + e)
      res.status(500).send(e)
   }
}
);

app.put("/atualizarFormulario/:id" , async ( req, res) => {
   const id = req.params.id 
   const nome = req.body.nome

   try {
      await firestore.updateDoc(firestore.doc(db, "formulario", id), {
         nome: nome,
      })
      res.send("Formulario atualizado com sucesso!")
   } catch (e) {
     console.log(" Erro ao atualizar formulário:" + e)

     res.status(500).send( "Erro ao atualizar formulário:" + e)
      
   }

})

app.delete("/deletarFormulario/:id", async (req, res) => {
   const id = req.params.id

   try {
      await firestore.deleteDoc(firestore.doc(db, "formulario", id))

     res.send("formulário deletado com sucesso!")
   } catch (e) {
     console.log("Erro ao deletar formulário: " + e)

     res.status(500).send( "Erro ao deletar formulário:" + e)
   }
})

app.listen(3000, function () {
   console.log("Serviço rodando em http://localhost:3000");

});