import express from 'express';

const app = express();

const holidays = [
    {month: 1, date: "19/1/2022", name: "Confraternização mundial" },
    {month: 3, date: "1/3/2022", name: "Carnaval" },
    {month: 4, date: "17/4/2022", name: "Páscoa" },
    {month: 4, date: "21/4/2022", name: "Tiradentes" },
    {month: 5, date: "1/5/2022", name: "Dia do trabalho" },
    {month: 6, date: "16/6/2022", name: "Corpus Christi" },
    {month: 9, date: "7/9/2022", name: "Independência do Brasil" },
    {month: 10, date: "12/10/2022", name: "Nossa Senhora Aparecida" },
    {month: 11, date: "2/11/2022", name: "Finados" },
    {month: 11, date: "15/11/2022", name: "Proclamação da República" },
    {month: 12, date: "25/12/2022", name: "Natal" }
  ];

  
  app.get("/holidays", (req, res) => {
      let holidayMonth = []
      
      res.send(holidays)
    })
    
    app.get("/is-today-holiday", (req, res) => {
        let hoje = new Date().toLocaleDateString() ;
        console.log(holidays.date)
        let msg = ""
        
        for (let i = 0; i < holidays.length; i++) {
            if (hoje === holidays[i].date){
                msg = `Sim, hoje é ${holidays[i].name}`
                break
            }else{
                msg = "Não, hoje não é feriado"
            }  
        }
        res.send(msg);
    })
    
    app.get('/holidays/:id', (req, res) => {
        const id = req.params.id;
    
        let holidayMonth = []
        for (let i = 0; i < holidays.length; i++) {
            if (holidays.month === parseInt(id)) {
               holidayMonth.push = holidays.name
            }
            
        }
        res.send(holidayMonth)
    });

    app.listen(4000);