"use client";

import React, { useState } from "react";
import ToggleMod from "./DarkLightMode";

function MainPage() {
  return (
      <div className="title">
          <h1> Welcome to Assignment 1</h1>
      </div>
  )
}

export default function Page() {
  return (
    <div>
      <MainPage/>
      <ToggleMod/>
    </div>
  )
}
