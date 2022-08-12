# Turnos Cruz Verde - Prueba Tecnica Frontend

### _Hecho por Alexander Rincon_

El proyecto esta hecho con las siguientes tecnologias:

- React
- React-pdf: Libreria usada para generación y descargar turno en PDF.
- MaterialUI: Libreria usada para componentes de UI
- simple-react-google-maps: Libreria para mostrar el mapa con los marcadores de las droguerias de Cruz verde (datos reales).
- React hook form: Libreria para el manejo de formularios, se opto por esta libreria en lugar de Formik para evitar los re-render y mejorar el performance.
- Emotion: Libreria usada para estilizar componentes.

Se utilizo la siguiente estructura de carpetas:

- Components
- Containers
- Views
- utils
- Context
- assets

Se utilizo Context para manejar el estado global de la aplicación, en este caso los siguientes datos:

- userData: informacion diligenciada en el formulario.
- officeSelected: sede seleccionada.
- Step: vista o pantalla en la cual esta la aplicacion

CodeSandbox Editor: [https://codesandbox.io/s/cruzverde-2qp4pn](https://codesandbox.io/s/cruzverde-2qp4pn)

CodeSandbox View: [https://2qp4pn.csb.app/](https://2qp4pn.csb.app/)
