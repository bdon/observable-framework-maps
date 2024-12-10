/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/pbf@3.3.0/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import t from"../ieee754@1.2.1/7575d723.js";var i=r,e=t;function r(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length}r.Varint=0,r.Fixed64=1,r.Bytes=2,r.Fixed32=5;var s=4294967296,n=1/s,o="undefined"==typeof TextDecoder?null:new TextDecoder("utf-8");function h(t){return t.type===r.Bytes?t.readVarint()+t.pos:t.pos+1}function a(t,i,e){return e?4294967296*i+(t>>>0):4294967296*(i>>>0)+(t>>>0)}function u(t,i,e){var r=i<=16383?1:i<=2097151?2:i<=268435455?3:Math.floor(Math.log(i)/(7*Math.LN2));e.realloc(r);for(var s=e.pos-1;s>=t;s--)e.buf[s+r]=e.buf[s]}function f(t,i){for(var e=0;e<t.length;e++)i.writeVarint(t[e])}function d(t,i){for(var e=0;e<t.length;e++)i.writeSVarint(t[e])}function p(t,i){for(var e=0;e<t.length;e++)i.writeFloat(t[e])}function l(t,i){for(var e=0;e<t.length;e++)i.writeDouble(t[e])}function c(t,i){for(var e=0;e<t.length;e++)i.writeBoolean(t[e])}function w(t,i){for(var e=0;e<t.length;e++)i.writeFixed32(t[e])}function F(t,i){for(var e=0;e<t.length;e++)i.writeSFixed32(t[e])}function g(t,i){for(var e=0;e<t.length;e++)i.writeFixed64(t[e])}function b(t,i){for(var e=0;e<t.length;e++)i.writeSFixed64(t[e])}function x(t,i){return(t[i]|t[i+1]<<8|t[i+2]<<16)+16777216*t[i+3]}function v(t,i,e){t[e]=i,t[e+1]=i>>>8,t[e+2]=i>>>16,t[e+3]=i>>>24}function y(t,i){return(t[i]|t[i+1]<<8|t[i+2]<<16)+(t[i+3]<<24)}r.prototype={destroy:function(){this.buf=null},readFields:function(t,i,e){for(e=e||this.length;this.pos<e;){var r=this.readVarint(),s=r>>3,n=this.pos;this.type=7&r,t(s,i,this),this.pos===n&&this.skip(r)}return i},readMessage:function(t,i){return this.readFields(t,i,this.readVarint()+this.pos)},readFixed32:function(){var t=x(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=y(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=x(this.buf,this.pos)+x(this.buf,this.pos+4)*s;return this.pos+=8,t},readSFixed64:function(){var t=x(this.buf,this.pos)+y(this.buf,this.pos+4)*s;return this.pos+=8,t},readFloat:function(){var t=e.read(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=e.read(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var i,e,r=this.buf;return i=127&(e=r[this.pos++]),e<128?i:(i|=(127&(e=r[this.pos++]))<<7,e<128?i:(i|=(127&(e=r[this.pos++]))<<14,e<128?i:(i|=(127&(e=r[this.pos++]))<<21,e<128?i:function(t,i,e){var r,s,n=e.buf;if(s=n[e.pos++],r=(112&s)>>4,s<128)return a(t,r,i);if(s=n[e.pos++],r|=(127&s)<<3,s<128)return a(t,r,i);if(s=n[e.pos++],r|=(127&s)<<10,s<128)return a(t,r,i);if(s=n[e.pos++],r|=(127&s)<<17,s<128)return a(t,r,i);if(s=n[e.pos++],r|=(127&s)<<24,s<128)return a(t,r,i);if(s=n[e.pos++],r|=(1&s)<<31,s<128)return a(t,r,i);throw new Error("Expected varint not more than 10 bytes")}(i|=(15&(e=r[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,i=this.pos;return this.pos=t,t-i>=12&&o?function(t,i,e){return o.decode(t.subarray(i,e))}(this.buf,i,t):function(t,i,e){var r="",s=i;for(;s<e;){var n,o,h,a=t[s],u=null,f=a>239?4:a>223?3:a>191?2:1;if(s+f>e)break;1===f?a<128&&(u=a):2===f?128==(192&(n=t[s+1]))&&(u=(31&a)<<6|63&n)<=127&&(u=null):3===f?(n=t[s+1],o=t[s+2],128==(192&n)&&128==(192&o)&&((u=(15&a)<<12|(63&n)<<6|63&o)<=2047||u>=55296&&u<=57343)&&(u=null)):4===f&&(n=t[s+1],o=t[s+2],h=t[s+3],128==(192&n)&&128==(192&o)&&128==(192&h)&&((u=(15&a)<<18|(63&n)<<12|(63&o)<<6|63&h)<=65535||u>=1114112)&&(u=null)),null===u?(u=65533,f=1):u>65535&&(u-=65536,r+=String.fromCharCode(u>>>10&1023|55296),u=56320|1023&u),r+=String.fromCharCode(u),s+=f}return r}(this.buf,i,t)},readBytes:function(){var t=this.readVarint()+this.pos,i=this.buf.subarray(this.pos,t);return this.pos=t,i},readPackedVarint:function(t,i){if(this.type!==r.Bytes)return t.push(this.readVarint(i));var e=h(this);for(t=t||[];this.pos<e;)t.push(this.readVarint(i));return t},readPackedSVarint:function(t){if(this.type!==r.Bytes)return t.push(this.readSVarint());var i=h(this);for(t=t||[];this.pos<i;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==r.Bytes)return t.push(this.readBoolean());var i=h(this);for(t=t||[];this.pos<i;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==r.Bytes)return t.push(this.readFloat());var i=h(this);for(t=t||[];this.pos<i;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==r.Bytes)return t.push(this.readDouble());var i=h(this);for(t=t||[];this.pos<i;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==r.Bytes)return t.push(this.readFixed32());var i=h(this);for(t=t||[];this.pos<i;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==r.Bytes)return t.push(this.readSFixed32());var i=h(this);for(t=t||[];this.pos<i;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==r.Bytes)return t.push(this.readFixed64());var i=h(this);for(t=t||[];this.pos<i;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==r.Bytes)return t.push(this.readSFixed64());var i=h(this);for(t=t||[];this.pos<i;)t.push(this.readSFixed64());return t},skip:function(t){var i=7&t;if(i===r.Varint)for(;this.buf[this.pos++]>127;);else if(i===r.Bytes)this.pos=this.readVarint()+this.pos;else if(i===r.Fixed32)this.pos+=4;else{if(i!==r.Fixed64)throw new Error("Unimplemented type: "+i);this.pos+=8}},writeTag:function(t,i){this.writeVarint(t<<3|i)},realloc:function(t){for(var i=this.length||16;i<this.pos+t;)i*=2;if(i!==this.length){var e=new Uint8Array(i);e.set(this.buf),this.buf=e,this.length=i}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),v(this.buf,t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),v(this.buf,t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),v(this.buf,-1&t,this.pos),v(this.buf,Math.floor(t*n),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),v(this.buf,-1&t,this.pos),v(this.buf,Math.floor(t*n),this.pos+4),this.pos+=8},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,i){var e,r;t>=0?(e=t%4294967296|0,r=t/4294967296|0):(r=~(-t/4294967296),4294967295^(e=~(-t%4294967296))?e=e+1|0:(e=0,r=r+1|0));if(t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes");i.realloc(10),function(t,i,e){e.buf[e.pos++]=127&t|128,t>>>=7,e.buf[e.pos++]=127&t|128,t>>>=7,e.buf[e.pos++]=127&t|128,t>>>=7,e.buf[e.pos++]=127&t|128,t>>>=7,e.buf[e.pos]=127&t}(e,0,i),function(t,i){var e=(7&t)<<4;if(i.buf[i.pos++]|=e|((t>>>=3)?128:0),!t)return;if(i.buf[i.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(i.buf[i.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(i.buf[i.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(i.buf[i.pos++]=127&t|((t>>>=7)?128:0),!t)return;i.buf[i.pos++]=127&t}(r,i)}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))))},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t)},writeBoolean:function(t){this.writeVarint(Boolean(t))},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var i=this.pos;this.pos=function(t,i,e){for(var r,s,n=0;n<i.length;n++){if((r=i.charCodeAt(n))>55295&&r<57344){if(!s){r>56319||n+1===i.length?(t[e++]=239,t[e++]=191,t[e++]=189):s=r;continue}if(r<56320){t[e++]=239,t[e++]=191,t[e++]=189,s=r;continue}r=s-55296<<10|r-56320|65536,s=null}else s&&(t[e++]=239,t[e++]=191,t[e++]=189,s=null);r<128?t[e++]=r:(r<2048?t[e++]=r>>6|192:(r<65536?t[e++]=r>>12|224:(t[e++]=r>>18|240,t[e++]=r>>12&63|128),t[e++]=r>>6&63|128),t[e++]=63&r|128)}return e}(this.buf,t,this.pos);var e=this.pos-i;e>=128&&u(i,e,this),this.pos=i-1,this.writeVarint(e),this.pos+=e},writeFloat:function(t){this.realloc(4),e.write(this.buf,t,this.pos,!0,23,4),this.pos+=4},writeDouble:function(t){this.realloc(8),e.write(this.buf,t,this.pos,!0,52,8),this.pos+=8},writeBytes:function(t){var i=t.length;this.writeVarint(i),this.realloc(i);for(var e=0;e<i;e++)this.buf[this.pos++]=t[e]},writeRawMessage:function(t,i){this.pos++;var e=this.pos;t(i,this);var r=this.pos-e;r>=128&&u(e,r,this),this.pos=e-1,this.writeVarint(r),this.pos+=r},writeMessage:function(t,i,e){this.writeTag(t,r.Bytes),this.writeRawMessage(i,e)},writePackedVarint:function(t,i){i.length&&this.writeMessage(t,f,i)},writePackedSVarint:function(t,i){i.length&&this.writeMessage(t,d,i)},writePackedBoolean:function(t,i){i.length&&this.writeMessage(t,c,i)},writePackedFloat:function(t,i){i.length&&this.writeMessage(t,p,i)},writePackedDouble:function(t,i){i.length&&this.writeMessage(t,l,i)},writePackedFixed32:function(t,i){i.length&&this.writeMessage(t,w,i)},writePackedSFixed32:function(t,i){i.length&&this.writeMessage(t,F,i)},writePackedFixed64:function(t,i){i.length&&this.writeMessage(t,g,i)},writePackedSFixed64:function(t,i){i.length&&this.writeMessage(t,b,i)},writeBytesField:function(t,i){this.writeTag(t,r.Bytes),this.writeBytes(i)},writeFixed32Field:function(t,i){this.writeTag(t,r.Fixed32),this.writeFixed32(i)},writeSFixed32Field:function(t,i){this.writeTag(t,r.Fixed32),this.writeSFixed32(i)},writeFixed64Field:function(t,i){this.writeTag(t,r.Fixed64),this.writeFixed64(i)},writeSFixed64Field:function(t,i){this.writeTag(t,r.Fixed64),this.writeSFixed64(i)},writeVarintField:function(t,i){this.writeTag(t,r.Varint),this.writeVarint(i)},writeSVarintField:function(t,i){this.writeTag(t,r.Varint),this.writeSVarint(i)},writeStringField:function(t,i){this.writeTag(t,r.Bytes),this.writeString(i)},writeFloatField:function(t,i){this.writeTag(t,r.Fixed32),this.writeFloat(i)},writeDoubleField:function(t,i){this.writeTag(t,r.Fixed64),this.writeDouble(i)},writeBooleanField:function(t,i){this.writeVarintField(t,Boolean(i))}};var V=i.Bytes,S=i.Fixed32,B=i.Fixed64,k=i.Varint,M=i.prototype;export{V as Bytes,S as Fixed32,B as Fixed64,k as Varint,i as default,M as prototype};
