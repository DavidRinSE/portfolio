import aws from "./aws.png"
import bootstrap from "./bootstraplogo.png"
import css from "./csslogo.png"
import django from "./django.png"
import express from "./expresslogo.png"
import git from "./gitlogo.png"
import graphql from "./GraphQL.png"
import heroku from "./heroku.png"
import html from "./htmllogo.png"
import js from "./jslogo.png"
import materialui from "./materialui.png"
import node from "./nodelogo.png"
import npm from "./npm.png"
import poetry from "./poetry.png"
import postgres from "./postgreslogo.png"
import postman from "./postman.png"
import python from "./python.png"
import react from "./reactlogo.png"
import recharts from "./recharts.png"
import redux from "./reduxlogo.png"
import sequelize from "./sequelize.png"
import travis from "./travis.png"

const technologies = {
    frontend: [
        {name: 'Bootstrap', img: bootstrap},
        {name: 'CSS', img: css},
        {name: 'HTML', img: html},
        {name: 'JavaScript', img: js},
        {name: 'MaterialUI', img: materialui},
        {name: 'React', img: react},
        {name: 'Recharts', img: recharts},
        {name: 'Redux', img: redux},
    ],
    backend: [
        {name: 'Python', img: python},
        {name: 'django', img: django},
        {name: 'JavaScript', img: js},
        {name: 'GraphQL', img: graphql},
        {name: 'Node.js', img: node},
        {name: 'PostgresSQL', img: postgres},
        {name: 'express', img: express},
        {name: 'Sequelize', img: sequelize},
    ],
    devops: [
        {name: 'Amazon Web Services', img: aws},
        {name: 'Git', img: git},
        {name: 'Heroku', img: heroku},
        {name: 'TravisCI', img: travis}

    ],
    tools: [
        {name: 'npm', img: npm},
        {name: 'Poetry', img: poetry},
        {name: 'Postman', img: postman},
    ]
}
export default technologies