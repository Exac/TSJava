/**
 * Created by Thomas on 1/17/16.
 */

/**
 * TSJava.ts
 *
 * TSJava.ts is a tool to add some of the functionality of the Java language to
 * TypeScript.
 *
 * WARNING: TSJava modifies global objects (Math), so don't use it if you don't
 * want namespace collisions.
 */

//`toRadians` takes an angle and converts it into radians. In a circle, one
// radian is the length of the radius.
Math.toRadians = function(angle) {
    return angle * Math.PI / 180;
};

interface Math {
    toRadians(angle:number);
}
