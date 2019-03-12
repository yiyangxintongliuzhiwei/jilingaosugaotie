import ips from './ips.js'
import ipsmsg from '../message/message.js'

ipsmsg.registerIpadHandler(ips.ipadHandler);

window.ipsmsg = ipsmsg;
window.ips = ips
