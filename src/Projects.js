export const Projects = () => {
    return (
        <div id="left-div" style={{padding: '3em', textAlign: 'left', overflow: 'scroll', height: '100%'}}>
            <div style={{width: '100%', textAlign: 'left', overflow: 'scroll', paddingBottom: '1em'}}>
                I've been getting back into coding for fun after work. These are some of the projects that I'm interested in undertaking (will document the process!):
                <li>Advent of Code 2024</li>
                <li>Fly.io distributed systems challenges</li>
                <br/>
            </div>
            <div style={{height: "30%", borderTop: 'solid', padding: '0.5em', borderBottom: 'solid', width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    Weenix <br/>
                    Spring 2021
                </div>
                <div style={{width: '60%', overflow: 'scroll'}}>
                    Implemented core components of a Unix-based operating system kernel using C: 
                    managing the lifecycle of processes and threads, device drivers for a character device (terminal), 
                    a block device (disk), and memory devices (e.g, /dev/null and /dev/zero), a general virtual file system API (to potentially support more than one file system), 
                    and an actual file system implementation (S5FS), 
                    and virtual memory (using virtual memory maps for lazy allocation of pages, shadow objects for copy-on-write when forking new processes, and support for mapping files into process address space).
                </div>
            </div>
            <div style={{height: '30%', padding: '0.5em', borderBottom: 'solid', display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    TCP/IP <br/>
                    Fall 2022
                </div>
                <div style={{width: '60%', overflow: 'scroll'}}>Built a RFC-compliant TCP and IP stack with congestion control (specifically Tahoe) from scratch, 
                    capable of supporting networks of arbitrary size sending data of arbitrary size atop of a virtual link layer (UDP), supporting routing through the Routing Information Protocol (RIP), 
                    and providing “user” level APIs of opening and closing a socket, listening and accepting connections, reading and writing to the socket, as well as support for multiple open sockets at once per node.
                </div>
            </div>
            <div style={{padding: '0.5em', borderBottom: 'solid', height: '25%', display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    Raft <br/>
                    Spring 2022
                </div>
                <div style={{width: '60%', overflow: 'scroll'}}>
                    Implemented the Raft protocol for consensus within a distributed system: electing a leader within a cluster, 
                    replicating the state machine across nodes, ensuring the consistency of data, 
                    and handling for client interactions using gRPCs and protobufs
                </div>
            </div>
            {/* <div style={{padding: '0.5em', borderBottom: 'solid', height: '25%', display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    Teaching Keyboard<br/>
                    Fall 2021
                </div>
                <div style={{width: '50%', overflow: 'scroll'}}>Implemented the Rraft protocol for consensus within a distributed system: electing a leader within a cluster, replicating the state machine across nodes, ensuring the consistency of data, and handling for client interactions using gRPCs and protobufs</div>
            </div> */}
        </div>
    )
}