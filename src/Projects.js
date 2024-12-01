export const Projects = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', height: '100%'}}>
            <div id="left-div" style={{padding: '3em', width: '100%', height: '100%', textAlign: 'left'}}>
                <div style={{height: "25%", borderTop: 'solid', padding: '0.5em', borderBottom: 'solid', width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        Weenix <br/>
                        Spring 2021
                    </div>
                    <div style={{width: '50%', overflowY: 'scroll'}}>Implemented core components of a Unix-based operating system kernel: process and thread management, device drivers, virtual file system API and its corresponding file system implementation (S5FS), and virtual memory.</div>
                </div>
                <div style={{height: '25%', padding: '0.5em', borderBottom: 'solid', display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        TCP/IP <br/>
                        Fall 2022
                    </div>
                    <div style={{width: '50%'}}>Built a TCP and IP stack with congestion control from scratch, capable of supporting networks of arbitrary size sending data of arbitrary size.</div>
                </div>
                <div style={{borderBottom: 'solid', height: '25%', display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        Raft <br/>
                        Spring 2022
                    </div>
                    <div style={{width: '50%'}}>Implemented the Rraft protocol for consensus within a distributed system: electing a leader within a cluster, replicating the state machine across nodes, ensuring the consistency of data, and handling for client interactions using gRPCs and protobufs</div>
                </div>
            </div>
            <div id="right-div" style={{paddingRight: '3em', paddingTop: '3em', width: '30%', textAlign: 'left'}}>
                Apart from these projects, I've also been getting back into coding for fun. And these are some of the projects that I'm interested in undertaking:
                <li>Advent of Code 2024</li>
                <li>Fly.io distributed systems challenges</li>
                <br/>
                Will document the process!
            </div>
        </div>
    )
}