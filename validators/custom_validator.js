exports.validate = (req, res, next) => {

    const { rule , data } = req.body


    console.log(req.body)

    // isJSON function from geek of geeks https://www.geeksforgeeks.org/javascript-check-if-a-string-is-a-valid-json-string/
    function isJSON(str) { 
        try { 
            return (JSON.parse(str) && !!str); 
        } catch (e) { 
            return false; 
        } 
    } 


    //PAYLOAD VALIDATION
    // Checks if payload is a valid json
    if(isJSON(req.body)){
        res.status(400).send(
            {
                "message": "Invalid JSON payload passed.",
                "status": "error",
                "data": null
            }
        )
    }



    //RULE VALIDATIONS
    // Checks if rule is in the data
    if(!rule) return res.status(400).send(
        {
        "message": "rule is required.",
        "status": "error",
        "data": null
      })

      // Checks if rule is an object
      if( typeof rule !== 'object' && rule != null) return res.status(400).send({
            "message": "rule should be an object.",
            "status": "error",
            "data": null
        })

      // Checks if field is in the rule data
      if(!rule.field) return res.status(400).send(
        {
        "message": "field is required in the rule object",
        "status": "error",
        "data": null
      })


      // Checks the nesting level 
      let level = rule.field.split('.')
      if(level.length > 2){

        return res.status(400).send(
            {
            "message": "The nesting should not be more than two levels",
            "status": "error",
            "data": null
          })

      }else{

        //   let couter = 0
        //   while(counter < level.length){
        //     if (!data[level[counter]]) {
        //         return throwError(`field ${data[level[counter]]} is missing from data.`);
        //       }
        //       counter++;
        //   }

          level.forEach(element => {

            console.log(data[element])
          
             if(!data[element]){
                return res.status(400).send(
                    {
                    "message": ` ${data.element} is required`,
                    "status": "error",
                    "data": null
                  })
             }else if(!data[outer][element]){
                return res.status(400).send(
                    {
                    "message": ` inner ${data[element].element} is required`,
                    "status": "error",
                    "data": null
                  })
             }
          });
      }

      // Checks if condition is in the rule data
      if(!rule.condition) return res.status(400).send(
        {
        "message": "condition is required in the rule object",
        "status": "error",
        "data": null
      })

     // Checks if condition_value is in the  rule data
      if(!rule.condition_value) return res.status(400).send(
        {
        "message": "condition_value is required in the rule object",
        "status": "error",
        "data": null
      })


     

      //DATA VALIDATIONS
       // Checks if data is either an object | array | string
      if(!["object", "array", "string"].includes(typeof data)) return res.status(400).send(
        {
            "message": "data should be an object | array | string.",
            "status": "error",
            "data": null
          });

    // Checks if data is in the data 
    if(!data) return res.status(400).send(
        {
        "message": "data is required.",
        "status": "error",
        "data": null
      })
      
      // Checks rule.field is in the data
      if(data[rule.field] == undefined ) {
        return res.status(400).send({
            "message": `field ${rule.field} is missing from data.`,
            "status": "error",
            "data": null
          });
      }


      next()


    
 
}