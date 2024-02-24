import React, { useState } from "react";
import "../../styles/styles.css";

function calculateBodyFat(gender, weight, waist, neck, hip, height, age) {
  let bodyFat;
  if (gender.toLowerCase() === "masculino") {
    bodyFat =
      495 /
        (1.0324 -
          0.19077 * Math.log10(waist - neck) +
          0.15456 * Math.log10(height)) -
      450;
  } else {
    bodyFat =
      495 /
        (1.29579 -
          0.35004 * Math.log10(waist + hip - neck) +
          0.221 * Math.log10(height)) -
      450;
  }
  return bodyFat;
}

export default function BodyFatCalculator() {
  const [bodyFat, setBodyFat] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const gender = event.target.genero.value;
    const weight = parseFloat(event.target.peso.value);
    const waist = parseFloat(event.target.cintura.value);
    const neck = parseFloat(event.target.pescoco.value);
    const hip = parseFloat(event.target.quadril.value);
    const height = parseFloat(event.target.altura.value);
    const age = parseInt(event.target.idade.value);
    const result = calculateBodyFat(
      gender,
      weight,
      waist,
      neck,
      hip,
      height,
      age
    );
    setBodyFat(result);
  };

  return (
    <form onSubmit={handleSubmit} class="grid gap-6 mb-6 md:grid-cols-2">
      <label>
        Gênero:
        <select id="genero">
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </label>
      <div>
        <label class="p-5">
          Peso:
          <input type="number" id="peso" />
        </label>
      </div>
      <label>
        Cintura:
        <input type="number" id="cintura" />
      </label>
      <label>
        Pescoço:
        <input type="number" id="pescoco" />
      </label>
      <label>
        Quadril:
        <input type="number" id="quadril" />
      </label>
      <label>
        Altura:
        <input type="number" id="altura" />
      </label>
      <label>
        Idade:
        <input type="number" id="idade" />
      </label>
      <button type="submit">Calcular</button>
      {bodyFat !== null && <p>Percentual de gordura corporal: {bodyFat}%</p>}

      <div class="col-span-12 bg-white border border-gray-300 p-5 mt-2.5">
        <div class="col s12">
          <h2>
            <strong>Calculadora de gordura corporal</strong>
          </h2>
          <p>
            Quer saber quanta gordura seu corpo possui? Esta calculadora de
            gordura corporal ou calculo de gordura corporal a quantidade de
            gordura que seu corpo possui. Mas, para medir o percentual de
            gordura corporal, será necessário levantar e medir a cintura, os
            quadris e o peso corporal. Coloque suas medidas de altura, idade,
            sexo, peso, cintura e quadris e calcular gordura corporal com apenas
            um clique.
          </p>
          <h3>
            <strong>
              VOCÊ ESTÁ EM SUA MISSÃO DE PERDA DE PESO OU PERDA DE GORDURA?
            </strong>
          </h3>
          <p>
            Calculadora de porcentagem de gordura corporal pode ser uma
            ferramenta útil Inicie sua missão e defina seu objetivo de missão de
            perda de gordura
          </p>
          <p>
            Esta calculadora de gordura corporal foi projetada para os usuários
            básicos para lhes dar uma idéia sobre a quantidade de gordura
            corporal e massa corporal que possuem. A calculo de gordura corporal
            fornece uma estimativa com base nos valores que você coloca para
            calcular gordura corporal. Esta calculadora também informa em qual
            categoria seu corpo cai. Você deve marcar esta calculadora de
            gordura corporal se estiver em uma missão de condicionamento físico,
            porque esta calculadora não apenas manterá você no caminho certo,
            mas também manterá você motivado e energético.
          </p>
          <h2>
            <strong>O que é gordura corporal?</strong>
          </h2>
          <p>
            Antes de calcular o percentual de gordura ideal corporal, você
            precisa saber o que é gordura corporal. Dois componentes principais
            da sua massa corporal são a massa magra e a gordura. 28% de gordura
            corporal é considerada ideal, de acordo com a Calculadora de Gordura
            Corporal da Marinha. Se o seu corpo tem mais gordura, você precisa
            controlar e reduzir isso e trazê-lo de volta ao percentual ideal de
            gordura corporal. Pescoço, cintura e quadris gordos são as
            indicações físicas de que seu corpo tem mais gordura do que o
            necessário. Portanto, se você tiver dúvidas, calcule seu percentual
            de gordura corporal usando esta calculadora porcentagem de gordura
            corporal.
          </p>
          <p>
            Agora, chegando à nossa pergunta principal, o que é gordura
            corporal? Nosso corpo precisa de energia para realizar tarefas
            diárias, e tudo o que comemos nos dá uma certa quantidade de
            energia. Se tivermos mais do que o necessário, a energia extra será
            armazenada na forma de gordura. E se comermos menos do que o
            necessário, a gordura armazenada se dissolverá para suprir a
            deficiência. Então, podemos dizer que as gorduras são basicamente
            energia reservada. Se continuarmos a comer mais do que o necessário
            para o nosso corpo, nosso corpo começará a acumular gordura extra.
            Essa gordura extra é armazenada em vários locais do corpo, como
            barriga, quadris, pescoço, etc. Essa gordura extra pode resultar em
            obesidade e ganho de peso. Se você tem alguma dúvida de que o peso
            que está ganhando é devido a essa gordura extra, é necessário
            calcular a gordura corporal usando esta calculo de gordura corporal.
          </p>
          <h2>
            <strong>Como calcular a gordura corporal?</strong>
          </h2>
          <p>
            Agora, como você sabe o que é gordura corporal, pode estar
            interessado em saber como calcular gordura corporal. Então, aqui
            vamos explicar como calcular a gordura corporal manualmente usando a
            fórmula. Porém, lembre-se de que o cálculo da gordura corporal
            usando a fórmula pode consumir muito tempo, e cálculos longos
            precisam ser feitos antes de você chegar à resposta final, mostrando
            o percentual de gordura ideal corporal. E a maneira mais fácil de
            calcular gordura corporal ainda é esta calculadora gordura corporal
            GRATUITA, que não é apenas fácil de usar, mas também rápida nos
            cálculos.
          </p>
          <p>
            Primeiro de tudo, você precisa saber o seu peso exato. Embora você
            possa verificar o seu peso corporal a qualquer hora do dia, o peso
            corporal mais preciso é medido antes do café da manhã quando você
            acorda. Porque depois do café da manhã, o peso dos alimentos que
            você acabou de comer e a água ou os sucos que você bebeu aumentam o
            seu peso corporal. Portanto, pese seu corpo antes do café da manhã e
            anote-o em algum lugar.
          </p>
          <p>
            Depois de pesar seu corpo, você precisa medir sua cintura, quadris,
            pescoço e depois sua altura. Depois de concluir suas medidas, você
            estará pronto para calcular seu percentual de gordura corporal. Aqui
            estão a fórmula e as equações para calcular a massa corporal magra e
            a gordura corporal:
          </p>
          <p>
            Portanto, agora, depois de visualizar os cálculos necessários ao
            calcular a gordura corporal usando a fórmula de porcentagem de
            gordura corporal, você pode ter mudado de idéia e definitivamente
            prefere usar esta calculo de percentual de gordura para calcular a
            gordura corporal em vez de se envolver em atividades complexas.
            cálculos manuais.
          </p>
          <h2>
            <strong>Percentual normal de gordura corporal</strong>
          </h2>
          <p>
            Agora você sabe como determinar o percentual de gordura ideal
            corporal em casa usando a fórmula de gordura corporal ou usando
            calculo de percentual de gordura, a próxima pergunta é o que é o
            percentual normal de gordura corporal? As pessoas dizem que têm 10%
            de gordura corporal, e algumas dizem que têm 20% de gordura
            corporal, enquanto outras dizem que têm 15% de gordura corporal, e
            então perguntam: é o percentual normal de gordura corporal?
            Portanto, para todas essas pessoas que perguntam qual é o percentual
            normal de gordura corporal, vamos dar a resposta. Para obter a
            melhor resposta, consulte o gráfico de porcentagem de gordura
            corporal de mulheres e homens, indicado abaixo. Calcular gordura
            corporal e verifique se é ideal ou não. Embora esta calculadora de
            bf já indique a categoria em que você se enquadra, mas para ter mais
            certeza, você pode consultar este gráfico de porcentagem de gordura
            corporal de mulheres e homens que postamos abaixo:
          </p>
          <h2>
            <strong>Por que calcular a porcentagem de gordura corporal?</strong>
          </h2>
          <p>
            Você sabe muito bem como calcular o percentual de gordura corporal
            usando a fórmula do percentual de gordura corporal e usando a
            calculadora gordura corporal, e também sabe o que é o percentual
            ideal de gordura corporal e, agora, também visualizou o gráfico de
            percentual de gordura ideal corporal, mulheres e homens . Agora, a
            pergunta é por que calcular gordura corporal e por que você precisa
            se preocupar tanto com a gordura corporal?
          </p>
          <p>
            Como dissemos, a gordura é o excesso de energia armazenada em seu
            corpo em várias partes, como pescoço, braços, quadris, barriga e
            pernas. Se o seu corpo continuar produzindo energia extra, o peso da
            gordura continuará aumentando e você começará a ganhar peso. Essa
            gordura extra irá perturbar a forma do seu corpo. Quando os lugares
            reservados estiverem cheios de gordura, ele começará a encontrar
            novos lugares no seu corpo, e isso é uma situação alarmante. Se a
            gordura começar a acumular-se ao redor do seu coração, você poderá
            se tornar vítima de um distúrbio cardíaco e de outras doenças
            cardíacas, como pressão arterial, bloqueio nas veias, etc. Então
            agora você deve ficar de olho no percentual de gordura ideal
            corporal antes que seja tarde demais e isso A calculadora gordura
            corporal manterá você informado sobre seu percentual de gordura
            corporal.
          </p>
        </div>
      </div>
    </form>
  );
}
