import{_ as e,o as a,c as r,Q as o}from"./chunks/framework.916102cd.js";const u=JSON.parse('{"title":"Celestia hardfork process","description":"Overview of the Celestia hardfork process.","frontmatter":{"description":"Overview of the Celestia hardfork process.","head":[["meta",{"name":"og:title","content":"Celestia hardfork process | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/hardfork-process.md","filePath":"nodes/hardfork-process.md","lastUpdated":1699636279000}'),t={name:"nodes/hardfork-process.md"},s=o('<h1 id="celestia-hardfork-process" tabindex="-1">Celestia hardfork process <a class="header-anchor" href="#celestia-hardfork-process" aria-label="Permalink to &quot;Celestia hardfork process&quot;">​</a></h1><p>Blockchain networks often times need to upgrade with new features which require coordination work among the validators prior to activating the upgrades.</p><p>This process is called a hardfork or a network upgrade. In those events, the Celestia Labs team will be coordinating with the validators on what they need to do in order to be ready for an upcoming hardfork.</p><p>Hardforks are not backward-compatible with older versions of the network software which is why it is important that validators upgrade their software to continue validating on the network after the network upgrades.</p><h2 id="general-process" tabindex="-1">General process <a class="header-anchor" href="#general-process" aria-label="Permalink to &quot;General process&quot;">​</a></h2><p>The general process can be broken down into several components:</p><ul><li>Hardfork specifications and features (defined by description of features and code implementation of those features).</li><li>Binary used to add those features (a new binary release with those features will be provided by Celestia team in order for validators to upgrade their nodes to the new binary).</li><li>A block number for when the network upgrades (even if validators upgrade their binary to be hardfork ready, the network upgrade does not happen right away, but some short time in the future at a specific block number).</li><li>Testing of the features (happens on testnets first prior to activating on mainnet in order to ensure the network can upgrade securely).</li></ul><p>The two testnets were hardforks are deployed on are:</p><ul><li><a href="./arabica-devnet">Arabica devnet</a></li><li><a href="./mocha-testnet">Mocha testnet</a></li></ul><h3 id="mocha-hardfork" tabindex="-1">Mocha hardfork <a class="header-anchor" href="#mocha-hardfork" aria-label="Permalink to &quot;Mocha hardfork&quot;">​</a></h3><p>Celestia is planning the Mocha Hardfork upgrade on the Mamaki Testnet. This hardfork is unique as it will reset the Mamaki network to block 0 while maintaining the existing state and also will rename Mamaki to Mocha.</p><p>The new chain-id will be <code>mocha</code>.</p><p>You can find the <a href="https://github.com/celestiaorg/celestia-app/releases" target="_blank" rel="noreferrer">release logs for consensus nodes on the celestia-app releases page</a>.</p><p>The most exciting feature included is setting the stage for Blobstream on Mocha.</p><p>Validators will need to generate 2 new keys in order to be Blobstream-ready. Note that for the Mocha Hardfork, Blobstream will not launch yet so you can swap those keys after for new ones if needed. The keys needed are:</p><ul><li>1 EVM key</li><li>1 Celestia key</li></ul><p>So, in order for this to happen, validators will need to maintain two new keys in order to have a successful upgrade.</p><p>Those two keys will need to be added to 2 new flags on <code>celestia-app</code>:</p><ul><li><code>--evm-address</code>: This flag should contain a <code>0x</code> EVM address.</li></ul><h3 id="blockspace-race-hardfork" tabindex="-1">Blockspace race hardfork <a class="header-anchor" href="#blockspace-race-hardfork" aria-label="Permalink to &quot;Blockspace race hardfork&quot;">​</a></h3><p>The Blockspace Race hardfork process will follow a different workflow than regular Tendermint and Cosmos-SDK network upgrades.</p><p>Instead of using tools like Cosmovisor and swapping binaries at block activation number, validators will be upgrading to new binaries ahead of the hardfork block number. The new binaries will have the new logic and features for activating when the target block number for the hardfork is reached.</p><p>To prepare for the hardfork, please upgrade to the new <code>celestia-app</code> version referenced in the Blockspace Race task.</p>',23),i=[s];function n(d,l,h,c,p,f){return a(),r("div",null,i)}const w=e(t,[["render",n]]);export{u as __pageData,w as default};
