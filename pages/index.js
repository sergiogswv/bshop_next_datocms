import Head from "next/head";
import Image from "next/image";
import { request } from "../lib/datocms";

export default function Home({ data }) {
  console.log(data);

  return (
    <div>
      <h1>hola</h1>
    </div>
  );
}

const testQuery = `
query{
  index{
    titulo
  }
}
`;
export async function getStaticProps() {
  const data = await request({
    query: testQuery,
  });

  return {
    props: {
      data,
    },
  };
}
