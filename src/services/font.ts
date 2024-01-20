import { Inter, Lora, Source_Sans_3 } from 'next/font/google'
 
// define your variable fonts
export const inter = Inter({ subsets: ['latin'] })
export const lora = Lora({ subsets: ['cyrillic'] })
// define 2 weights of a non-variable font
export const sourceCodePro400 = Source_Sans_3({ weight: '400', subsets: ['latin'] })
export const sourceCodePro700 = Source_Sans_3({ weight: '700', subsets: ['latin'] })
