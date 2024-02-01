import express from "express"
import { db, firestore } from '../bancos-de-dados/firebase';
import e from "express";

const app = express()
app.use( express.json())

app.get("/", (req, res) => {
   res.send(" A minha primeira API")
})

app.post("/usuario", async (req, res) => {
   const nome = req.body.nome
   const email = req.body.email
   const telefone = req.body.telefone

   try {
      const docRef = await firestore.addDoc(firestore.collection(db, 'usuarios'), {
         nome: nome,
         email:email,
         telefone: telefone,
      })

      res.send("Usuario adicionado com sucesso:" +  docRef.id);
   } catch (error) { 
     console.log(e)
     res.status(500).send(e)
   }
})


app.listen(3000, function () {
   console.log("Serviço rodando em http://localhost:3000");

});