import React from "react";
export function Person({ name, nickName, images }) {
    const img =
        images?.[0]?.small?.url ??
        "https://shotkit.com/wp-content/uploads/2020/07/headshots_image002.jpg";

    return (
        <div>
            <img
                src={img}
                alt={name}
                style={{ width: "50px", backgroundColor: "transparent" }}
            />
            <h4>{name}</h4>
            <p>Nickname: {nickName || "default_nickname"}</p>
        </div>
    );
}
