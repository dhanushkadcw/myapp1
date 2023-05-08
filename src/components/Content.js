import React from "react";
import './content.css'

export default function Content() {
  return (
    <div className="paragraph">
      <p>
        The end of a cylindrical pressure vessel is a flanged hemispherical cap
        attached to the cylinder by 24 high-tensile steel bolts equally spaced
        around the coupled flanges. The cylinder has an effective internal
        diameter of 1 m and the combined thickness of the flanges is 0.1m. Each
        bolt is 12mm diameter and has a pitch of 1.5 mm. All the nuts are
        rotated until they are just tight and then tightened by a further
        one twelfth of a turn. Determine the tensile stress induced in each bolt
        assuming that the bolt head, the nut and the flanges are perfectly
        rigid. The pressure inside the vessel is now increased. Calculate at
        what pressure the vessel will begin to leak. Assume that the modulus of
        elasticity for steel is 206GN/m2 .
      </p>
    </div>
  );
}
