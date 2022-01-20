import express from 'express';

const app = express();

const holidays = [
    {month: 1, date: "1/19/2022", name: "Confraternização mundial" },
    {month: 3, date: "3/1/2022", name: "Carnaval" },
    {month: 4, date: "4/17/2022", name: "Páscoa" },
    {month: 4, date: "4/21/2022", name: "Tiradentes" },
    {month: 5, date: "5/1/2022", name: "Dia do trabalho" },
    {month: 6, date: "6/16/2022", name: "Corpus Christi" },
    {month: 9, date: "9/7/2022", name: "Independência do Brasil" },
    {month: 10, date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    {month: 11, date: "11/2/2022", name: "Finados" },
    {month: 11, date: "11/15/2022", name: "Proclamação da República" },
    {month: 12, date: "12/25/2022", name: "Natal" }
  ];

  
  app.get("/holidays", (req, res) => {
      let holidayMonth = []
      res.send(holidays)
    })
    
    app.get("/is-today-holiday", (req, res) => {
        let hoje = new Date().toLocaleDateString('en-US') ;
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
            if (holidays[i].month === parseInt(id)) {
               holidayMonth.push(holidays[i].name)
            }  
        }
        res.send(holidayMonth)
    });

    app.listen(4000);