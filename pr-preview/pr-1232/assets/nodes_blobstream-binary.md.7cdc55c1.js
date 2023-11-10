import{c as t}from"./chunks/constants.d2a00a0d.js";import{o as n,c as r,k as s,a,t as l,l as o,Q as e}from"./chunks/framework.d468a620.js";const i=e('<h1 id="install-the-blobstream-binary" tabindex="-1">Install the Blobstream binary <a class="header-anchor" href="#install-the-blobstream-binary" aria-label="Permalink to &quot;Install the Blobstream binary&quot;">​</a></h1><p>The <a href="./blobstream-orchestrator">orchestrator</a> is the software that signs the Blobstream attestations, and the <a href="./blobstream-relayer">relayer</a> is the one that relays them to the target EVM chain.</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2>',3),p=s("a",{href:"https://go.dev/doc/install",target:"_blank",rel:"noreferrer"},"Install Go",-1),c=s("p",null,[a("Clone the "),s("code",null,"https://github.com/celestiaorg/orchestrator-relayer"),a(" repository:")],-1),h={class:"language-bash vp-adaptive-theme"},d=s("button",{title:"Copy Code",class:"copy"},null,-1),_=s("span",{class:"lang"},"bash",-1),b={class:"shiki github-dark vp-code-dark"},y=e('<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/celestiaorg/orchestrator-relayer.git</span></span>',1),u=s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"cd"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"orchestrator-relayer")],-1),m={class:"line"},g=s("span",{style:{color:"#B392F0"}},"git",-1),E=s("span",{style:{color:"#E1E4E8"}}," ",-1),k=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),f=s("span",{style:{color:"#E1E4E8"}}," ",-1),C={style:{color:"#9ECBFF"}},F={class:"shiki github-light vp-code-light"},B=e('<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/celestiaorg/orchestrator-relayer.git</span></span>',1),T=s("span",{class:"line"},[s("span",{style:{color:"#005CC5"}},"cd"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"orchestrator-relayer")],-1),v={class:"line"},w=s("span",{style:{color:"#6F42C1"}},"git",-1),A=s("span",{style:{color:"#24292E"}}," ",-1),P=s("span",{style:{color:"#032F62"}},"checkout",-1),I=s("span",{style:{color:"#24292E"}}," ",-1),D={style:{color:"#032F62"}},S=e('<li><p>Install the Blobstream CLI</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div></li>',1),V=e(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Print help</span></span>
<span class="line"><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Print help</span></span>
<span class="line"><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span></span></code></pre></div><h2 id="how-to-run" tabindex="-1">How to run <a class="header-anchor" href="#how-to-run" aria-label="Permalink to &quot;How to run&quot;">​</a></h2><p>If you are a Celestia-app validator, all you need to do is run the orchestrator. Check out <a href="./blobstream-orchestrator">the Blobstream orchestrator page</a> for more details.</p><p>If you want to post commitments on an EVM chain, you will need to deploy a new Blobstream contract and run a relayer. Check out <a href="./blobstream-relayer">the Blobstream relayer page</a> for relayer docs and <a href="./blobstream-deploy">the Blobstream deployment page</a> for how to deploy a new Blobstream contract.</p><p>Note: the Blobstream P2P network is a separate network than the consensus or the data availability one. Thus, you will need its specific bootstrappers to be able to connect to it.</p><h2 id="contributing" tabindex="-1">Contributing <a class="header-anchor" href="#contributing" aria-label="Permalink to &quot;Contributing&quot;">​</a></h2><h3 id="tools" tabindex="-1">Tools <a class="header-anchor" href="#tools" aria-label="Permalink to &quot;Tools&quot;">​</a></h3><ol><li>Install <a href="https://golangci-lint.run/usage/install/" target="_blank" rel="noreferrer">golangci-lint</a></li><li>Install <a href="https://github.com/DavidAnson/markdownlint" target="_blank" rel="noreferrer">markdownlint</a></li></ol><h3 id="helpful-commands" tabindex="-1">Helpful Commands <a class="header-anchor" href="#helpful-commands" aria-label="Permalink to &quot;Helpful Commands&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Build a new orchestrator-relayer binary and output to build/blobstream</span></span>
<span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Run tests</span></span>
<span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Format code with linters (this assumes golangci-lint and markdownlint are installed)</span></span>
<span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fmt</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Build a new orchestrator-relayer binary and output to build/blobstream</span></span>
<span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Run tests</span></span>
<span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Format code with linters (this assumes golangci-lint and markdownlint are installed)</span></span>
<span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fmt</span></span></code></pre></div><h2 id="useful-links" tabindex="-1">Useful links <a class="header-anchor" href="#useful-links" aria-label="Permalink to &quot;Useful links&quot;">​</a></h2><p>The smart contract implementation is in <a href="https://github.com/celestiaorg/blobstream-contracts/" target="_blank" rel="noreferrer">blobstream</a>.</p><p>The state machine implementation is in <a href="https://github.com/celestiaorg/celestia-app/tree/main/x/blobstream" target="_blank" rel="noreferrer">x/blobstream</a>.</p><p>Blobstream ADRs are in <a href="https://github.com/celestiaorg/celestia-app/tree/main/docs/architecture" target="_blank" rel="noreferrer">the docs</a>.</p><p>Blobstream design explained in <a href="https://blog.celestia.org/celestiums/" target="_blank" rel="noreferrer">this blog post on layer 2s</a>.</p>`,16),M=JSON.parse('{"title":"Install the Blobstream binary","description":"This guide shows you how to install the Blobstream binary.","frontmatter":{"description":"This guide shows you how to install the Blobstream binary.","head":[["meta",{"name":"og:title","content":"Install the Blobstream binary | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/blobstream-binary.md","filePath":"nodes/blobstream-binary.md","lastUpdated":1699639365000}'),q={name:"nodes/blobstream-binary.md"},O=Object.assign(q,{setup(x){return(N,R)=>(n(),r("div",null,[i,s("ol",null,[s("li",null,[s("p",null,[p,a(" "+l(o(t).golangBlobstream),1)])]),s("li",null,[c,s("div",h,[d,_,s("pre",b,[s("code",null,[y,a(`
`),u,a(`
`),s("span",m,[g,E,k,f,s("span",C,l(o(t).orchrelayVersion),1)])])]),s("pre",F,[s("code",null,[B,a(`
`),T,a(`
`),s("span",v,[w,A,P,I,s("span",D,l(o(t).orchrelayVersion),1)])])])])]),S]),V]))}});export{M as __pageData,O as default};
