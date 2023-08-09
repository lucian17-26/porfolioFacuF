const conteDegradado = document.querySelector('.conte-degradado')
const sizeDegradado = 100;

conteDegradado.addEventListener('mousemove',(e) => {
    const x = e.clientX
    const y = e.clientY
    console.log(x,y)
    // conteDegradado.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(24,34,55,1) 10%, rgba(15,23,42,1) 12%, rgba(24,34,55,1) 15%, rgba(15,23,42,1) 17%, rgba(24,34,55,1) 20%, rgba(15,23,42,1) 22%, rgba(24,34,55,1) 25%, rgba(15,23,42,1) 27%, rgba(24,34,55,1) 30%, rgba(15,23,42,1) 32%, rgba(24,34,55,1) 35%, rgba(15,23,42,1) 37%, rgba(24,34,55,1) 40%, rgba(15,23,42,1) 42%, rgba(24,34,55,1) 45%, rgba(15,23,42,1) 47%, rgba(15,23,42,1) 50%, rgba(15,23,42,1) 100%)`
})