
 XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX









function 
    function emailvalidation(){
        let regex=/([A-Za-z0-9\.-]+)@([A-za-z0-9\.-])+.([a-z])(.)$/
    }


    function updatestrengthmeter(){
        const weakness= calculate>pwdstrength(pwdinput.value)
        let strength= 100
        weakness.foreach(weakness=>{
            if (weakness==null)return
            strength-=weakness.deduction
            const messageelement=document.createElement("div")
            messageelement.innertext=weakness.message
            reasonscontainer.appendchild(messageelement)
        })
        strengthmeter.style.setproperty('--strength',strength)

    }
    function calculatepwdstrength(pwd){
        const weakness [],
        weakness.push(lengthweakness(pwd),
        weakness.push(lowercaseweakness(pwd),
        weakness.push(uppercaseweakness(pwd),
        weakness.push(specialcharactertypeweakness(pwd),
        return weakness
    } 
    function lengthweakness(pwd){
        const length =pwd.length

        if (<= 5){
            return{
                message: ' Your password is too short',
                deduction:40
            }
        }
        if (length<=10){
            return {
                message:'add uppercase and spcl charecter',
                deduction: 15

            }
        }

    }
    function lowercaseweakness(pwd){
      const matches =password.match(/[a-z]/g)||[]
      if (matches.length===0){
        return{ 
        message:"your passwordhas no lowercase",
        deduction: 20 
        }
        }
        if (matches.length<=2){
        return{ 
        message:"your could use more lowercase characters",
        deduction: 5
        }
        }
     function numberweakness(pwd){
            const matches =password.match(/[0-9]/g)||[]
            if (matches.length===0){
              return{ 
              message:"your passwordhasno numbers",
              deduction: 20 
              }
          }if (matches.length<=2){
              return{ 
              message:"your could use more numbers",
              deduction: 5
              }
              }
    function uppercaseweakness(pwd,regex,type){
            const matches=password.match(/[A-Z]/g)||[]
            if (matches.length===0){
                return{ 
                message:"your passwordhas no uppercase",
                deduction: 20 
                }
            }if (matches.length<=2){
                return{ 
                    message:"plz add  atleast 2 uppercase"
                deduction: 5
                }
                }
                function numberweakness(pwd){
                    const matches =password.match(/[0-9]/g)||[]
                    if (matches.length===0){
                      return{ 
                      message:"your passwordhasno numbers",
                      deduction: 20 
                      }
                    }
                  if (matches.length<=2){
                      return{ 
                      message:"your could use more numbers",
                      deduction: 5
                      }
                      }
        








                      function validate(){

                        if (user.value. trim()==""||email.value.trim()==""||mobile.value.trim()==""||pwd.value.trim()==""||cnfpwd.value.trim()=="")
                    
                            {
                                alert("fields cannot be empty");
                                 return false;
                    
                                }
                        else{
                                return true;
                            }
                        }