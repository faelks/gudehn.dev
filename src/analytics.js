import { inferEnv } from "./util";
import faunadb from "faunadb";

async function getIpAddress() {
  const ipinfoToken = "bd13d1a9226c74";
  const ipinfoUrl = `https://ipinfo.io/json?token=${ipinfoToken}`;
  const result = await fetch(ipinfoUrl);
  return await result.json();
}

export async function sendAnalytics() {

  console.log(process.env.TEST);

  const ipInfo = await getIpAddress();
  const { userAgent, platform } = navigator;

  const analyticsData = {
    ...ipInfo,
    userAgent,
    platform,
  };

  if (inferEnv() === "production") {
    const client = new faunadb.Client({
      secret: process.env.FAUNADB_SECRET,
    });
    const q = faunadb.query;
    await client.query(
      q.Create(q.Collection("visits"), { data: analyticsData })
    );
  } else {
    console.log("Would have sent the following analytics to Db", analyticsData);
  }
}
