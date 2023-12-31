"use client";
import NextAuth from 'next-auth/next';
import {getProviders, signIn}from 'next-auth/react';
import { type } from 'os';
import {useState, useEffect}from 'react';

type Provider = {
  id: string ;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams: Record<string,string>
  |null;
}
type Providers = Record<string,Provider>;

const AuthProviders = () => {
  const[providers,setProviders]= useState<Providers|null>(null);
  

  return (
    <div>AuthProviders</div>
  )
}

export default AuthProviders