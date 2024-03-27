import React from "react";
import Link from "next/link";
export default function SideList() {
  return (
    <div className="quickLink_container">
      <div className="List_header">
        <p>Quick links</p>
      </div>
      <div className="list_container">
        {[1, 2, 3, 4, 5, 6, 7].map(() => {
          return (
            <>
              <div className="quick_link">
                <span>o</span>
                <Link href={"/"} className="small_links">
                  Flats in Kasavanahalli for jjsckjk rent
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
