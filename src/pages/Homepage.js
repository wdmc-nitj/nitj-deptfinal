import { Department } from "../components/department";
import Imagesroll from "../components/Imagesroll";
import TopPlacement from "../components/TopPlacement";
import React, { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function Homepage() {
  const params = useParams();
  const dept = params?.dept;
  const navigate = useNavigate();
  useEffect(() => {
    const sessionID = params?.id;
    const [searchParams, setSearchParams] = useSearchParams()
    const redirection = searchParams?.redirect
    if (sessionID != null) {   
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 90*24*60*60;
        now.setTime(expireTime);
        document.cookie = `nitjsession=${sessionID};expires=${now.toUTCString()};path=/;`;
    }
    if(redirection){
      navigate(`/dept/${dept}/Faculty/${redirection}`)
    }
  }, [params?.id]);

  return (
    <div className="flex items-center flex-col w-full h-full px-auto mt-0">
      <Imagesroll />
      <Department />
      <TopPlacement />
    </div>
  );
}

export default Homepage;