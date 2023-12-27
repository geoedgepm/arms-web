
'use client'
import React from "react";
import { 
    Select,
    Col,
    Row,
    Table,
    Button
} from "antd";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions
} from 'chart.js';
import './style.css';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function Page() {
  return <h1>Hello!, Dashboard</h1>
}
