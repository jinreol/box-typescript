import { EmailValidator } from "./EmailValidator"

let email = 'john.doe@typescripttutorial.net'
let Validator = new EmailValidator()
let result = Validator.isValid(email)

console.log(result)
