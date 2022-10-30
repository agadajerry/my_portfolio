import {
    DiJavascript1,
    DiMysql,
    DiNodejsSmall,
    DiPostgresql,
    DiJava,
    DiCss3,
    DiPhp
} from "react-icons/di";
import { SiGraphql, SiMongodb, SiTypescript, SiNestjs, SiWritedotas } from "react-icons/si";
import { FaBootstrap, FaReact, FaMusic } from "react-icons/fa";
import { AiFillHtml5, AiFillRead } from "react-icons/ai";
import { MdCardTravel } from "react-icons/md";

export const skills = [{
        name: "Javascript",
        icon: < DiJavascript1 / > ,
        color: "bg-danger"
    },
    {
        name: "Typescript",
        icon: < SiTypescript / > ,
        color: "bg-primary"
    },
    {
        name: "Node.js",
        icon: < DiNodejsSmall / > ,
        color: "bg-danger"
    },
    {
        name: "GraphQl",
        icon: < SiGraphql / > ,
        color: "bg-primary"
    },
    {
        name: "React.js",
        icon: < FaReact / > ,
        color: "bg-danger"
    },
    {
        name: "Mongodb",
        icon: < SiMongodb / > ,
        color: "bg-primary"
    },
    {
        name: "Mysql",
        icon: < DiMysql / > ,
        color: "bg-danger"
    },
    {
        name: "Postgresql",
        icon: < DiPostgresql / > ,
        color: "bg-primary"
    },
    {
        name: "Core Java",
        icon: < DiJava / > ,
        color: "bg-danger"
    },
    {
        name: " Core PHP",
        icon: < DiPhp / > ,
        color: "bg-primary"
    },
    {
        name: "Nest.js",
        icon: < SiNestjs / > ,
        color: "bg-danger"
    },
    {
        name: "Bootstrap",
        icon: < FaBootstrap / > ,
        color: "bg-primary"
    },
    {
        name: "CSS3",
        icon: < DiCss3 / > ,
        color: "bg-danger"
    },
    {
        name: "HTML5",
        icon: < AiFillHtml5 / > ,
        color: "bg-primary"
    },
];

export const interest = [

    {
        name: "music",
        icon: < FaMusic / > ,
        color: "bg-success"
    },
    {
        name: "Travelling",
        icon: < MdCardTravel / > ,
        color: "bg-success"
    },
    {
        name: "Writing",
        icon: < SiWritedotas / > ,
        color: "bg-success"
    },
    {
        name: "Reading",
        icon: < AiFillRead / > ,
        color: "bg-success"
    },

]