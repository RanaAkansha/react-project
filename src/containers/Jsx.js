let name='Mohan';
function CheckEvenOrOdd(num){

}
function CheckAlphabet(char){
  switch(char){
    case 'a' : 
    case 'e' : 
    case 'i' :
    case 'o' : 
    case 'u' : 
    case 'A' :
    case 'E' : 
    case 'I' : 
    case 'O' :
    case 'U' :
    return <div>Vowel</div>
    default : <div>Consonant</div>
  }
}
let num  = 4;
const users=[
  { name: 'Mohan', age:25},
  { name: 'Ram', age:24},
  { name: 'Rohit', age:21}
]

function Jsx() {
  return (
    <div>
      <h2>Hello {name} 18</h2>
      <div>
        <h3>If - else statement</h3>
        {
          CheckEvenOrOdd(5)
        }
        {
          num%2 === 0
          ? <div>Even number</div> 
          : <div>Odd number </div>
        }
        <h3>If statement</h3>
        {
          num%2 === 0 && <div>Even number</div>
        }
        <h3>Loop</h3>
        {
          users.map((item,index)=> {
            return <div key={index}> {item.name} - {item.age}</div>
          })
        }
        <h3>Switch</h3>
        {
          CheckAlphabet('a')
        }
      </div>
    </div>
  );
}
export default Jsx;

export function Greet (){
   return <h1>Hello World</h1>
}