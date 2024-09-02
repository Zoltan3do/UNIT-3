const NewComponent = function (props) {
  console.log('OGGETTO PROPS DI NEWCOMPONENT', props)
  // questo è un componente React creato a funzione
  // dobbiamo esplicitamente ritornare del JSX
  return <h3 className={props.cssClass}>CIAO, SONO {props.name}</h3>
}

// props è un oggetto contentente TUTTE le prop che questo componente riceve
// c'è una corrispondenza diretta tra i nomi delle prop che passate
// all'invocazione del componente e i nomi delle proprietà di questo oggetto

export default NewComponent
// esportiamo come default il nostro componente NewComponent in modo
// da poterlo utilizzare dagli ALTRI file della nostra first-app
// ora è possibile IMPORTARE NewComponent in qualsiasi altro file o componente
