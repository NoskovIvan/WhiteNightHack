// https://colorpalettes.net/
export const cols = {
  p1: {
    c1: { hex: '#f2f1dc',	rgb: 'rgb(242,241,220,1)'},
    c2: { hex: '#c7e3b9',	rgb: 'rgb(199,227,185,1)'},
    c3: { hex: '#85c9ba',	rgb: 'rgb(133,201,186,1)'},
    c4: { hex: '#6aa1a3',	rgb: 'rgb(106,161,163,1)'},
    c5: { hex: '#5b7389',	rgb: 'rgb(91,115,137,1)'},
    c6: { hex: '#484D58', rgb: 'rgb(75,40,40,1)'},
    c7: { hex: '#333135', rgb: 'rgb(75,40,40,1)'},
  },
  p2: {
    c1: { hex: '#fff8b6', rgb: 'rgb(255,248,182,1)'},
    c2: { hex: '#ffe4a3', rgb: 'rgb(255,228,163,1)'},
    c3: { hex: '#ffbd91', rgb: 'rgb(255,189,145,1)'},
    c4: { hex: '#ff8d71', rgb: 'rgb(255,141,113,1)'},
    c5: { hex: '#ff707e', rgb: 'rgb(255,112,126,1)'},
  },
  p3: {
    c1: { hex: '#f9e9d2', rgb: 'rgb(249,233,210,1)'},
    c2: { hex: '#e3b48c', rgb: 'rgb(227,180,140,1)'},
    c3: { hex: '#966a57', rgb: 'rgb(150,106,87,1)'},
    c4: { hex: '#4b2828', rgb: 'rgb(75,40,40,1)'},
    c5: { hex: '#2d1616', rgb: 'rgb(45,22,22,1)'},
  },
  p4: {
    c1: { hex: '#06491d', rgb: 'rgb(249,233,210,1)'},
    c2: { hex: '#52b58f', rgb: 'rgb(227,180,140,1)'},
    c3: { hex: '#dabf95', rgb: 'rgb(150,106,87,1)'},
    c4: { hex: '#c76838', rgb: 'rgb(75,40,40,1)'},
    c4: { hex: '#793c13', rgb: 'rgb(75,40,40,1)'},
    c5: { hex: '#350c09', rgb: 'rgb(45,22,22,1)'},
  },
  p5: {
    c1: { hex: '#d11d1d', rgb: 'rgb(249,233,210,1)'},
    c2: { hex: '#ecb573', rgb: 'rgb(227,180,140,1)'},
    c3: { hex: '#ffe6a3', rgb: 'rgb(150,106,87,1)'},
    c4: { hex: '#879163', rgb: 'rgb(75,40,40,1)'},
    c4: { hex: '#3c3115', rgb: 'rgb(75,40,40,1)'},
  },
  p6: {
    c1: { hex: '#793c13', rgb: 'rgb(249,233,210,1)'},
    c2: { hex: '#ff707e', rgb: 'rgb(249,233,210,1)'},
    c3: { hex: '#7BBEB9', rgb: 'rgb(227,180,140,1)'},
    c4: { hex: '#06491d', rgb: 'rgb(249,233,210,1)'},
    c5: { hex: '#484D58', rgb: 'rgb(75,40,40,1)'},
    c6: { hex: '#333135', rgb: 'rgb(75,40,40,1)'},
  },
  p7: {
    c1: { hex: '#8C8757', rgb: 'rgb(249,233,210,1)'},
    c2: { hex: '#FEFAD7', rgb: 'rgb(249,233,210,1)'},
    c3: { hex: '#FFBB22', rgb: 'rgb(227,180,140,1)'},
    c4: { hex: '#C54F22', rgb: 'rgb(249,233,210,1)'},
    c5: { hex: '#380702', rgb: 'rgb(75,40,40,1)'},
    c6: { hex: '#2d1616', rgb: 'rgb(75,40,40,1)'},
  },
  p8: {
    c1: { hex: '#fb8700', rgb: 'rgb(249,233,210,1)'},
    c2: { hex: '#f8e119', rgb: 'rgb(227,180,140,1)'},
    c3: { hex: '#d7e58d', rgb: 'rgb(249,233,210,1)'},
    c4: { hex: '#61767b', rgb: 'rgb(75,40,40,1)'},
    c5: { hex: '#304a4b', rgb: 'rgb(75,40,40,1)'},
  },
  p9: {
    c1: { hex: '#fbaf3b', rgb: 'rgb(249,233,210,1)'},
    c2: { hex: '#eff6a9', rgb: 'rgb(227,180,140,1)'},
    c3: { hex: '#64856c', rgb: 'rgb(249,233,210,1)'},
    c4: { hex: '#002b12', rgb: 'rgb(75,40,40,1)'},
    c5: { hex: '#010005', rgb: 'rgb(75,40,40,1)'},
  },

}




export const s = {
  /////////////////////////////////////////////////////////
  // Components
  triangle: {
    // width:'20px',
    // height:'10px',
    borderBottomRightRadius: '15px',
    borderBottomLeftRadius: '15px',
    boxShadow: '#101010 0px 2px 15px',
    // position: 'relative',
    // left: '85px',
    // zIndex: '-100',
    width:'0px',
    height:'0px',
    borderLeft:'15px solid transparent',
    borderRight:'15px solid transparent',
    borderTop:'15px solid #FFFFFF',
    fontSize:'0px',
    lineHeight:'0px',
    position: 'relative',
    top: '-10px',
    left: '80px',
    zIndex: '200',
    // boxShadow: '#101010 0px 2px 5px',
  },
  bordRou2: {
    border: `solid 2px ${cols.p2.c4.hex}`,
    borderRadius: '8px'
  },
  btnFilled: {
    border: `solid 2px ${cols.p2.c4.hex}`,
    borderRadius: '8px',
    fontSize:'16px',
    height:'50px',
    padding:'5px',
    backgroundColor:cols.p2.c4.hex,
  },
  /////////////////////////////////////////////////////////
  // Universal
  white: {
    color: 'white',
  },
  grey: {
    color: 'grey',
  },
  tar: {
    textAlign: 'right'
  },
  tal: {
    textAlign: 'left'
  },
  tac: {
    textAlign: 'center'
  },
  vat: {
    verticalAlign: 'top'
  },
  vab: {
    verticalAlign: 'bottom'
  },
  aic: {
    alignItems: 'center'
  },
  jic: {
    justifyItems: 'center'
  },
  /////////////////////////////////////////////////////////
  // Functions
  p: (p) => {
    return {
      padding: p
    }
  },
  m: (m) => {
    return {
      margin: m
    }
  },
  w: (v) => {
    return {
      width: v
    }
  },
  h: (v) => {
    return {
      height: v
    }
  },
  fs: (s) => {
    return {
      fontSize: s
    }
  },
  zi: (z) => {
    return {
      zIndex: z
    }
  },
  bgc: (c) => {
    return {
      backgroundColor: c
    }
  },
  sd: (s) => {
    return {
      boxShadow: s
    }
  },
  br: (s) => {
    return {
      borderRadius: s
    }
  },
  c: (s) => {
    return {
      color: s
    }
  },
  /////////////////////////////////////////////////////////
  // Universal functions
  // функция упрощает объединение стилей
  mn: (...o) => {
    let res = {}
    o.map((item)=>res=Object.assign(res, item))
    return res
  },


};