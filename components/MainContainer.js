import A from "./A";
import Head from "next/head";

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={"igor tv, next js" + keywords}></meta>
                <title>Home page</title>
            </Head>
            <div className="navbar">
                <A href={"/"} text={"Index"} />
                <A href={"/users"} text={"Users"} />
            </div>
            <div>{children}</div>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                    .link {
                        text-decoration: none;
                        color: white;
                        font-size: 20px;
                        margin: 10px;
                    }
                `}
            </style>
        </>
    );
};

export default MainContainer;
