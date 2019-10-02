function mealsId(req, router) {
  console.log(req.param.id);
}

fetch ('http://localhost:3000/api/meals/4')
.then(res => res.json())
.then(data => console.log(data))
export default mealsId;
