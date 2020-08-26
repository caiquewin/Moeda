//module
module.exports = {

    async calc50(req, res) { 
        const {vPago,vProduto}=req.body
        const result= 50+50
      res.json({vPago,vProduto})
    },

}
