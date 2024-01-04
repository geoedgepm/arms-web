
'use client';
import React from "react";
import { Select, Col, Row, Table, Button } from "antd";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import './style.css';
import { useRouter } from "next/navigation";
import { deleteCookie } from 'cookies-next';


ChartJS.register(ArcElement, Tooltip, Legend);

export default function Page() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      deleteCookie("token");
      console.log("Logout success! ");
      router.push("/auth");
    } catch (error) {
      console.log('Logout unsuccess!',error);
    }
  };

  return (
    <>
      <h1>Hello!, Dashboard</h1>


      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15%' }}>
        <Button onClick={handleLogout} type="primary" danger>
          Logout
        </Button>
      </div>


    </>
  );
};
