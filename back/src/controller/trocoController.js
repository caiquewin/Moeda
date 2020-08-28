//module
module.exports = {

    async calc50(req, res) { 
        const {pago,produ}=req.body
        console.log(produ,pago)
      
      const cedulas=[100, 50, 20, 10, 5, 1];
      const moedas=[0.5, 0.10, 0.05, 0.01];

     var c100=0, c50=0, c10=0, c5=0,c1=0, m5=0, m10=0, m05=0, m01=0;
     var  troco=0, faltaPagar=0,valorTroco=0;
     faltaPagar = pago-produ
     let total=[]
     let faltaPagarValue;

     if (faltaPagar > pago)
     
                     {
                         console.log(`Falta  ${faltaPagar}`);
                     }
     
                     else if (faltaPagar == pago)
                     {
                         console.log(`Não existe troco`);
                     }
                     else
                     {
                         faltaPagarValue=faltaPagar
                         console.log(`Troco: ${faltaPagar}`);
                         while (faltaPagar >= 100)
                         {
                             faltaPagar -= 100;
                             c100++;
                         }
                         while (faltaPagar >= 50)
                         {
                             faltaPagar -= 50;
                             c50++;
                         }
                         while (faltaPagar >= 10)
                         {
                             faltaPagar -= 10;
                             c10++;
                         }
                         while (faltaPagar >= 5)
                         {
                             faltaPagar -= 5;
                             c5++;
                         }
                         while (faltaPagar >= 1)
                         {
                             faltaPagar -= 1;
                             c1++;
                         }
                         while (faltaPagar >= 0.50)
                         {
                             faltaPagar -= 0.50;
                             m05++;
                         }
                         while (faltaPagar >= 0.10)
                         {
                             faltaPagar -= 0.10;
                             m10++;
                         }
                         while (faltaPagar >= 0.05)
                         {
                             faltaPagar -= 0.05;
                             m5++;
                         }
                         while (faltaPagar >= 0.01)
                         {
                             faltaPagar -= 0.01;
                             m01++;
                         }
                         
                         if (c100 > 0) {console.log(`${c100} Nota(s) de: R$ 100,00 reais`)
                        await total.push({nota100:c100})};
                         if (c50 > 0) {console.log(`${c50} Nota(s) de: R$ 50,00 reais`)
                        await total.push({nota50:c50})};
                         if (c10 > 0) {console.log(`${c10} Nota(s) de: R$ 10,00 real`)
                        await total.push({nota10:c10})};
                         if (c5 > 0) {console.log(`${c5} Notas(s) de: R$ 5,00 reais`)
                        await total.push({nota5:c5})};
                         if (c1 > 0) {console.log(`${c1} Notas(s) de: R$ 1,00 reais`)
                        await total.push({nota1:c1})};
                         if (m5 > 0) {console.log(`${m5} Moeda(s) de: R$ 0,10 centavos`)
                        await total.push({moeda50:m5})};
                         if (m05 > 0) {console.log(`${m05} Moeda(s) de: R$ 0,05 centavos`)
                        await total.push({moeda5:m05})};
                         if (m01 > 0) {console.log(`${m01} Moeda(s) de: R$ 0,01 centavos`)
                        await total.push({moeda1:m01})};
                         console.log(total)
                        await res.json({troco:faltaPagarValue,total:total})
                        //  res.json({total})
                         

    }
}
}