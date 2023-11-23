import { Link, Flex, Text, IconButton } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

export default function Home() {
	return (
    // @ts-ignore
  <div>
      <Text fontSize="20px" color="black">Ищу ассистента для верстки (ReactJS/Chakra) новой версии va-calculator-v1.0, которая будет использоваться в моей статье на [ссылка на статью]([ссылку пришлю в личку]).</Text>
      <Text>&nbsp;</Text>
      <Text>Предлагаю совместно работать над этим калькулятором. Вам будет предоставлено бесплатное менторство от меня, и у вас будет возможность получить опыт, который поможет вам в будущем в поиске работы.</Text>
      <Text>Я нахожусь в Торонто. Мой подход к разработке калькулятора представлен в [этом видео]([ссылку пришлю в личку]), которое доступно в моей группе VAOP: eco-programming paradigm ([ссылку пришлю в личку])</Text>
      <Text>На данный момент я сосредоточен на функциональной части. Мне нужен партнер, который добавит декоративные элементы и стили к проекту.</Text>
      <Text>Вот эти линки надо потом вставить:</Text>
      <Link href="https://vc.ru/u/1369846-valeri-rakitine/573408-vaop-v-primerah-reactjs-mini-va-calculator">https://vc.ru/u/1369846-valeri-rakitine/573408-vaop-v-primerah-reactjs-mini-va-calculator</Link>
      <Link href="https://t.me/ecoprog">https://t.me/ecoprog</Link>
      <Link href="https://drive.google.com/file/d/1DQ9U4dWI2uQM4nBpYycgD4v-wgvjJMGS/view">https://drive.google.com/file/d/1DQ9U4dWI2uQM4nBpYycgD4v-wgvjJMGS/view</Link>
  </div>
  );
  }
