import React from "react";
import Classroom from "../assets/classroom.svg";
import Logo from "../assets/logo.png";
import {
    Pane,
    Heading,
    Text,
    Avatar,
    UnorderedList,
    ListItem,
    Badge,
} from "evergreen-ui";

function About(props) {
    const mobile = props.mobile;
    return (
        <Pane
            paddingTop="12vh"
            paddingBottom="12vh"
            paddingRight={mobile ? "10vw" : ""}
            paddingLeft="10vw"
            background="#7050c2"
            display="flex"
            flexDirection={mobile ? "column" : "row"}
            justifyContent="center"
            alignItems="center"
        >
            <Pane
                width={mobile ? "100%" : "40%"}
                data-aos="fade-right"
                minWidth="30vw"
            >
                <Pane display="flex" alignItems="center" marginBottom="2.5em">
                    <Avatar
                        src={Logo}
                        size={mobile ? "64px" : "96px"}
                        marginRight="2em"
                    />
                    <Heading
                        size={900}
                        fontSize={mobile ? "32px" : "48px"}
                        color="white"
                        textAlign="left"
                        verticalAlign="text-top"
                    >
                        Who Are We?
                    </Heading>
                </Pane>
                <Text size={mobile ? 500 : 600} color="white">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                </Text>
                <UnorderedList
                    icon="tick-circle"
                    iconColor="success"
                    size={600}
                    marginTop="3em"
                >
                    <ListItem color="white">
                        <Heading size={700} color="white">
                            Promise 1
                        </Heading>
                        <Text color="white" size={500}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor.
                        </Text>
                    </ListItem>
                    <ListItem color="white">
                        <Heading size={700} color="white" marginTop="1em">
                            Promise 2
                        </Heading>
                        <Text color="white" size={500}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor.
                        </Text>
                    </ListItem>
                    <ListItem color="white">
                        <Pane
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            marginTop="1em"
                        >
                            <Heading size={700} color="white">
                                Promise 3
                            </Heading>
                            <Badge
                                color="blue"
                                marginLeft="10px"
                                marginTop="6px"
                                isSolid
                            >
                                Coming Soon
                            </Badge>
                        </Pane>

                        <Text color="white" size={500}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor.
                        </Text>
                    </ListItem>
                </UnorderedList>
            </Pane>
            <Pane
                marginLeft="5em"
                borderTopLeftRadius={50}
                borderBottomLeftRadius={50}
                overflow="hidden"
                display={mobile ? "none" : ""}
            >
                <img src={Classroom} alt="Classroom" />
            </Pane>
        </Pane>
    );
}

export default About;
