const firstStep = document.querySelector('.primer-paso');
const secondStstep = document.querySelector('.segundo-paso');
const finalStep = document.querySelector('.paso-final');

function go(currentStep,nextStep)
{
	let dNone, dBlock;
	if(currentStep ==1)
	{
		dNone = firstStep;
	}
	else if(currentStep ==2)
	{
		dNone = secondStstep;
	}
	else
	{
		dNone = finalStep;
	}
	dNone.style.display = 'none';


if(nextStep ==1)
	{
		dBlock = firstStep;
	}
	else if(nextStep ==2)
	{
		dBlock = secondStstep;
	}
	else
	{
		dBlock = finalStep;
	}
	dBlock.style.display = 'block';
	}

	function validate()
	{
		const peso = document.getElementById('peso');
		const altura = document.getElementById('altura')
		peso.style.border = 'none';
		altura.style.border = 'none';
		if(!peso.value || !altura.value)
		{
			if(!peso.value && !altura.value)
			{
				peso.style.border = '1x solid red';
				altura.style.border = '1px solid red';
			}
			else if(!peso.value)
			{
				peso.style.border = '1px solid red';
			}
			else{
				altura.style.border = '1px solid red';
			}
			
		}
		else
		{
			let imc = peso.value / (altura.value * altura.value);
			const result = document.getElementById('resultado');
			if(imc < 18.5)
			{
				console.log('Bajo Peso | Obesida: 0');
				result.innerHTML = 'Bajo Peso | Obesidad: 0';
			}
			else if(imc >= 18.5 && imc < 25)
			{
				console.log('Normal | Obesidad: 0');
				result.innerHTML = 'Normal | Obesidad: 0';
			}
			else if('imc >= 25 && imc <30')
			{
				console.log('Sobrepeso | Obesidad: I');
				result.innerHTML = 'Sobrepeso | Obesidad: I';
			}
			else if('imc >= 30 && imc < 40')
			{
				console.log('Obesidad | Obesidad: II');
				result.innerHTML = 'Obesidad | Obesidad: II';
			}
			else{
				console.log('Obesidad grave | Obesidad: III');
				result.innerHTML = 'Obesidad grave | Obesidad: III';
			}
			go(2,3);
		}
	}



