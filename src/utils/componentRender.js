const componentRender = (componentsArr, selectedState, title) => {
  switch (selectedState) {
    case "classState":
      return `
        import React, { Component } from 'react';

        class ${title} extends Component {
        constructor(props) {
          super(props);
          this.state = {};
        }
        render() {
          return (
            <div>
            ${componentsArr.map((child) => child.react_code).join("\n")}
            </div>
          )
          }
        }
        export default ${title};
      `;

    case "hooksState":
      return `
      import React, { useState } from 'react';

      const ${title} = props => (
        const [state, setState] = useState('')
          <div>
          ${componentsArr.map((child) => child.react_code).join("\n")}
          </div>
          );

          export default ${title};
          `;
    default:
      return `import React from 'react';

      const ${title} = props => (
          <div>
          ${componentsArr.map((child) => child.react_code).join("\n")}
          </div>
          );

          export default ${title};
          `;
  }
};

export default componentRender;

// import PropTypes from 'prop-types';

//   import PropTypes from 'prop-types';
// ${title}.propTypes = {
//     ${props.map(p => `${p.key}: PropTypes.${p.type}${p.required ? '.isRequired' : ''},`).join('\n')}
//   }
//   ${title}.propTypes = {
//     ${props.map(p => `${p.key}: PropTypes.${p.type}${p.required ? '.isRequired' : ''},`).join('\n')}
//   }