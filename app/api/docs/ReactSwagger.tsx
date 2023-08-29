'use client'

// TODO - fix unidentified error caused by swagger-ui-react
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

type Props = {
    spec: Record<string, any>,
};

function ReactSwagger({ spec }: Props) {
    return <SwaggerUI spec={spec} />;
}

export default ReactSwagger;