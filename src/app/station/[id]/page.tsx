"use client"
import { notFound } from "next/navigation";
import useSWR from "swr";
import Image from "next/image";

const fetcher = (url: string) => fetch(url).then(res => res.json());

function StationPanel({ id }: { id: string }) {
  const { data, isLoading, error } = useSWR(`/api/station/${id}`, fetcher, {refreshInterval: 0})
  
  if (error) return notFound()
  if (isLoading) return <div className="items-center justify-center align-middle flex min-w-full h-screen min-h-screen bg-gradient-to-r from-slate-300 to-zinc-100"><Image alt={"loading..."} src={"/rings.svg"} width={100} height={100} /></div>
  if (data === undefined) return notFound()
  return (
    <>
      <div className="items-center justify-center flex center min-w-full h-screen min-h-screen bg-gradient-to-r from-slate-300 to-zinc-100">
        <div className="flex flex-col w-7/12 rounded-2xl overflow-hidden">
          <div className="h-20 bg-white border-b-1 border-slate-200">

          </div>
          <div className="h-20 bg-slate-100">

          </div>
          <div className="h-20 bg-white">

          </div>
        </div>
      </div>     
    </>
  )

}

export default function Panel({ params }: { params: { id: string } }) {
  return(
    <>
      <StationPanel id={params.id}/>
    </>
  )
}