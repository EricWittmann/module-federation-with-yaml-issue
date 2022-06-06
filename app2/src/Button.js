import React from "react";
import YAML from "yaml";

const EXAMPLE_YAML = `
foo: bar
pleh: help
stuff:
	foo: bar
	bar: foo
`;

function parseYaml(content) {
	return YAML.parse(content);
}


const Button = () => {
	const value = parseYaml(EXAMPLE_YAML);
	console.info("PARSED: ", value);
	return <button>{ value }</button>
}

export default Button;
