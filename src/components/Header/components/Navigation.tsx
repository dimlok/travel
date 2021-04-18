import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "shared/components/Button";
import React from "react";

const List = styled.div`
  display: flex;
`;

const Item = styled(Button)<{ isActive: boolean }>`
  :hover {
    opacity: 0.75;
  }
  color: white;
  margin-left: 8.2rem;
  font-size: 1.6rem;
  border-bottom: ${(props) => (props.isActive ? "1px" : "0px")} solid;
`;

interface Data {
  title: string;
  url: string;
}

interface NavigationProps {
  data: Data[];
}
export default function Navigation({ data }: NavigationProps) {
  const [active, setActive] = useState(0);
  return (
    <List>
      {data.map((item, index) => {
        return (
          <Link to={item.url} key={index}>
            <Item
              key={index}
              isActive={index === active}
              onClick={() => setActive(index)}
            >
              {item.title}
            </Item>
          </Link>
        );
      })}
    </List>
  );
}
