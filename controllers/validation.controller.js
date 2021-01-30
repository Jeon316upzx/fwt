


exports.validationController = ( req , res ) => {

    const { rule , data } = req.body

    switch(rule.condition) {

        case 'eq':  
        
          if( data[rule.field] === rule.condition_value){

              res.status(200).send(
                {
                    "message" : `field ${ rule.field } successfully validated.`,
                    "status": "success",
                    "data": {
                      "validation": {
                        "error": false,
                        "field": rule.field,
                        "field_value": data[rule.field],
                        "condition": rule.condition,
                        "condition_value" : rule.condition_value
                      }
                    }
                  }
              )

          }else{



            res.status(400).send(
                {
                    "message" : `field ${ rule.field } failed validation.`,
                    "status": "error",
                    "data": {
                      "validation": {
                        "error": true,
                        "field": rule.field,
                        "field_value": data[rule.field],
                        "condition": rule.condition,
                        "condition_value" : rule.condition_value
                      }
                    }
                  }
              )


          }

          break
      
        case 'neq':

            if( data[rule.field] != rule.condition_value){

                res.status(200).send(
                  {
                      "message" : `field ${ rule.field } successfully validated.`,
                      "status": "success",
                      "data": {
                        "validation": {
                          "error": false,
                          "field": rule.field,
                          "field_value": data[rule.field],
                          "condition": rule.condition,
                          "condition_value" : rule.condition_value
                        }
                      }
                    }
                )
  
            }else{
  
  
  
              res.status(400).send(
                  {
                      "message" : `field ${ rule.field } failed validation.`,
                      "status": "error",
                      "data": {
                        "validation": {
                          "error": true,
                          "field": rule.field,
                          "field_value": data[rule.field],
                          "condition": rule.condition,
                          "condition_value" : rule.condition_value
                        }
                      }
                    }
                )
  
  
            }

          break



          case 'gt':

            if( data[rule.field] > rule.condition_value){

                res.status(200).send(
                  {
                      "message" : `field ${ rule.field } successfully validated.`,
                      "status": "success",
                      "data": {
                        "validation": {
                          "error": false,
                          "field": rule.field,
                          "field_value": data[rule.field],
                          "condition": rule.condition,
                          "condition_value" : rule.condition_value
                        }
                      }
                    }
                )
  
            }else{
  
  
  
              res.status(400).send(
                  {
                      "message" : `field ${ rule.field } failed validation.`,
                      "status": "error",
                      "data": {
                        "validation": {
                          "error": true,
                          "field": rule.field,
                          "field_value": data[rule.field],
                          "condition": rule.condition,
                          "condition_value" : rule.condition_value
                        }
                      }
                    }
                )
  
  
            }

          break



          case 'gte':

            if( data[rule.field] >= rule.condition_value){

                res.status(200).send(
                  {
                      "message" : `field ${ rule.field } successfully validated.`,
                      "status": "success",
                      "data": {
                        "validation": {
                          "error": false,
                          "field": rule.field,
                          "field_value": data[rule.field],
                          "condition": rule.condition,
                          "condition_value" : rule.condition_value
                        }
                      }
                    }
                )
  
            }else{
  
  
  
              res.status(400).send(
                  {
                      "message" : `field ${ rule.field } failed validation.`,
                      "status": "error",
                      "data": {
                        "validation": {
                          "error": true,
                          "field": rule.field,
                          "field_value": data[rule.field],
                          "condition": rule.condition,
                          "condition_value" : rule.condition_value
                        }
                      }
                    }
                )
  
  
            }

          break



          case 'contains':

            if( data[rule.field].include(rule.condition_value)){

                res.status(200).send(
                  {
                      "message" : `field ${ rule.field } successfully validated.`,
                      "status": "success",
                      "data": {
                        "validation": {
                          "error": false,
                          "field": rule.field,
                          "field_value": data[rule.field],
                          "condition": rule.condition,
                          "condition_value" : rule.condition_value
                        }
                      }
                    }
                )
  
            }else{
  
  
  
              res.status(400).send(
                  {
                      "message" : `field ${ rule.field } failed validation.`,
                      "status": "error",
                      "data": {
                        "validation": {
                          "error": true,
                          "field": rule.field,
                          "field_value": data[rule.field],
                          "condition": rule.condition,
                          "condition_value" : rule.condition_value
                        }
                      }
                    }
                )
  
  
            }

          break
      
        default:

            res.status(400).send(
                {
                "message": "condition not supported",
                "status": "error",
                "data": null
              })
          
          break
      }

}






