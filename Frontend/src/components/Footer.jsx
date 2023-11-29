import React from 'react';
import { MdLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaMapLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      {/* Phần Trust */}
      <div className=' bg-gray-300 p-5'>
      <table align='center' className='lg:w-[80%]'>
        <tr>
          <td align='center'>
            <div data-type="block.settings.icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.104 19.744h.097L26 26.759l-4.058.347L19.409 30l-3.377-5.16L12.656 30l-2.727-2.957L6 26.759l3.864-7.078c.021.189.119.42.292.692l.032.031c.217.294.639.598 1.266.913.39.147.79.22 1.202.22.476 0 .833-.073 1.071-.22l.13.094c.217.189.39.315.52.378.454.251.963.377 1.526.377.52 0 1.017-.126 1.493-.377.152-.063.325-.189.52-.378l.064-.094c.325.147.704.22 1.137.22.346 0 .736-.073 1.169-.22.584-.273 1.006-.577 1.266-.913l.097-.157c.152-.23.25-.42.293-.566a.224.224 0 0 0 .162.063Zm3.247-9.281c.173.23.26.556.26.975 0 .357-.087.671-.26.944-.109.252-1.007.357-2.695.315h-.292l.552.22c.606.23 1.05.409 1.33.535.499.251.758.445.78.582.022.136.016.283-.016.44a4.05 4.05 0 0 1-.179.582c-.151.378-.368.66-.65.85a1.15 1.15 0 0 1-.649.22c-.086 0-.454-.178-1.103-.535-.52-.273-.855-.461-1.007-.566l-.13-.063.26.252c1.255 1.111 1.84 1.782 1.753 2.013-.086.294-.27.577-.552.85-.39.398-.79.597-1.201.597-.13 0-.682-.524-1.656-1.573l-.39-.409v.126c.239.44.444.891.617 1.353.325.776.433 1.227.325 1.353a1.6 1.6 0 0 1-.844.597 1.985 1.985 0 0 1-.812.19c-.173 0-.4-.253-.682-.756-.173-.273-.4-.713-.681-1.321l-.26-.504v.252c.043 1.636-.054 2.506-.292 2.611-.217.19-.541.284-.974.284-.433 0-.769-.095-1.007-.284-.238-.105-.335-.975-.292-2.61v-.347l-.065.157c-.714 1.678-1.245 2.517-1.591 2.517-.216 0-.487-.057-.812-.173a1.701 1.701 0 0 1-.811-.613c-.13-.126-.044-.577.26-1.353.194-.483.4-.933.616-1.353l.098-.126-.163.063c-.065.042-.249.241-.552.598-.822.88-1.287 1.321-1.396 1.321-.39 0-.779-.199-1.169-.598-.303-.314-.487-.597-.551-.849-.044-.168.227-.556.811-1.164.39-.42.747-.766 1.072-1.038l.13-.063-.163.063c-.13.084-.465.272-1.006.566-.628.357-.974.535-1.04.535-.584 0-1.038-.357-1.363-1.07-.173-.42-.227-.765-.162-1.038 0-.126.26-.315.779-.566a28.03 28.03 0 0 1 1.331-.535l.552-.22h-.227c-1.71.042-2.63-.063-2.76-.315-.173-.189-.26-.514-.26-.975 0-.462.087-.776.26-.944.13-.21 1.039-.294 2.727-.252h.357l-.357-.126c-1.58-.587-2.38-1.017-2.402-1.29-.065-.272-.011-.597.162-.975.303-.692.758-1.038 1.364-1.038.065 0 .411.178 1.039.535.54.294.876.482 1.006.566l.162.063-.292-.283C8.976 6.55 8.403 5.87 8.468 5.618c.064-.252.248-.545.551-.88.368-.336.758-.504 1.17-.504.172 0 .822.618 1.947 1.856l.163.126-.098-.158c-.216-.44-.422-.89-.617-1.352-.303-.776-.39-1.248-.26-1.416.174-.189.444-.367.812-.535.282-.105.547-.157.796-.157s.579.377.99 1.132c.26.504.476.986.65 1.448l.032.094v-.378c-.043-1.636.049-2.527.276-2.674.227-.147.563-.22 1.006-.22.444 0 .78.073 1.007.22.227.147.32 1.038.276 2.674v.284l.162-.378c.303-.608.541-1.07.714-1.384.303-.546.552-.818.747-.818.303 0 .574.052.812.157.39.147.67.325.844.535.108.168 0 .64-.325 1.416-.173.42-.378.87-.617 1.352v.158l.065-.126c.174-.23.498-.577.974-1.038.563-.546.899-.818 1.007-.818.433 0 .833.168 1.201.503.26.294.444.587.552.881.065.147-.108.43-.52.85-.216.251-.573.587-1.07 1.006l-.358.346-.065.126.13-.063c.152-.105.487-.293 1.007-.566.649-.357 1.017-.535 1.104-.535.237 0 .454.063.649.189.281.168.498.45.65.85.194.398.248.723.162.975-.022.272-.812.702-2.37 1.29l-.358.125h.422c1.667-.042 2.554.042 2.663.252Zm-9.448 7.079c1.125 0 2.17-.278 3.133-.834a6.304 6.304 0 0 0 2.289-2.234c.563-.933.844-1.95.844-3.051a5.883 5.883 0 0 0-.844-3.068 6.142 6.142 0 0 0-2.29-2.234 6.284 6.284 0 0 0-3.149-.818 6.373 6.373 0 0 0-3.165.818 6.231 6.231 0 0 0-2.322 2.234 5.8 5.8 0 0 0-.86 3.068 5.72 5.72 0 0 0 .86 3.051 6.397 6.397 0 0 0 2.322 2.234 6.31 6.31 0 0 0 3.182.834Zm0-1.416a5.01 5.01 0 0 1-2.468-.63 4.682 4.682 0 0 1-1.786-1.714 4.513 4.513 0 0 1-.649-2.36c0-.849.216-1.635.65-2.359a4.681 4.681 0 0 1 1.785-1.715 5.01 5.01 0 0 1 2.468-.629c.887 0 1.699.21 2.435.63.736.419 1.315.99 1.737 1.714.422.724.633 1.51.633 2.36 0 .849-.211 1.636-.633 2.36a4.627 4.627 0 0 1-1.737 1.714 4.83 4.83 0 0 1-2.435.629Z" fill="#231E18"></path></svg></div>
            <h3 class="trust-highlight__heading collapse-bottom-small-only"><strong>Ngôi Nhà Âm Nhạc <br /> &amp; Cá Tính Âm Nhạc</strong></h3>
          </td>
          <td align='center'>
            <div data-type="block.settings.icon" class="trust-highlight__circle"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.997 23.634c0-.59.217-1.11.653-1.557.435-.448.953-.662 1.555-.641a2.32 2.32 0 0 1 1.555.64c.435.408.663.927.684 1.558.02.631-.208 1.14-.684 1.527-.477.386-.996.6-1.555.64-.56.041-1.078-.172-1.555-.64-.477-.469-.695-.977-.653-1.527Zm6.655-8.732h-6.655v-4.366h2.736c.145 0 .27.051.373.153l3.39 3.328a.495.495 0 0 1 .156.366v.52ZM5.447 23.634c0-.59.218-1.11.653-1.557.436-.448.954-.662 1.555-.641a2.32 2.32 0 0 1 1.555.64c.435.408.664.927.684 1.558.021.631-.207 1.14-.684 1.527-.477.386-.995.6-1.555.64-.56.041-1.078-.172-1.555-.64-.477-.469-.694-.977-.653-1.527ZM1 5.102v17.433c0 .163.02.315.062.458a.468.468 0 0 0 .249.305c.124.061.218.122.28.183.062.061.197.102.404.122l.404.031h.809c0 1.2.435 2.229 1.306 3.084.87.855 1.918 1.282 3.141 1.282s2.27-.427 3.141-1.282c.87-.855 1.306-1.883 1.306-3.084h6.655c0 1.2.436 2.229 1.307 3.084.87.855 1.917 1.282 3.14 1.282 1.224 0 2.27-.427 3.142-1.282.87-.855 1.306-1.883 1.306-3.084h1.959c.083 0 .207-.01.373-.03.166-.02.3-.061.404-.123l.28-.183c.083-.06.166-.163.25-.305a.59.59 0 0 0 .061-.458c0-.305-.103-.56-.31-.763a1.181 1.181 0 0 0-.778-.336v-6.687c0-.122-.02-.315-.062-.58l-.094-.64c-.02-.164-.103-.337-.248-.52l-.405-.519-3.42-3.358a2.634 2.634 0 0 0-.871-.55 2.73 2.73 0 0 0-1.027-.214h-2.767V5.102c0-.306-.114-.57-.343-.794-.228-.224-.487-.326-.777-.305H2.12c-.311 0-.57.101-.778.305-.207.203-.321.468-.342.794Z" fill="#231E18"></path></svg></div>
            <h3 class="trust-highlight__heading collapse-bottom-small-only"><strong>Giao Hàng Miễn Phí <br />&amp; Đảm Bảo Vận Chuyển</strong></h3>
          </td>
          <td align='center'>
            <div data-type="block.settings.icon" class="trust-highlight__circle"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 25.03V6.97c0-1.348.476-2.514 1.428-3.496C4.38 2.49 5.509 2 6.816 2h17.92c.747 0 1.372.27 1.876.81.504.538.756 1.174.756 1.906v8.12C29.123 14.204 30 16.014 30 18.268c0 2.254-.877 4.055-2.632 5.404v1.358c0 1.348-.476 2.514-1.428 3.496-.952.983-2.081 1.474-3.388 1.474H6.816c-1.307 0-2.436-.491-3.388-1.474C2.476 27.544 2 26.378 2 25.03Zm4-9.678a2 2 0 0 1 2-2h14a2 2 0 0 1 1.876 1.304h-6.112c-1.213 0-2.25.443-3.108 1.33-.859.886-1.288 1.945-1.288 3.178 0 1.233.43 2.292 1.288 3.179.859.886 1.895 1.329 3.108 1.329H24v1.096a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9.416Zm18 6.528v1.792h1.632v1.358c.019.848-.28 1.59-.896 2.225-.616.636-1.344.954-2.184.954H6.816c-.84-.02-1.559-.338-2.156-.954a3.083 3.083 0 0 1-.896-2.225V10.813c.859.752 1.876 1.127 3.052 1.127h17.92c.261 0 .476.087.644.26a.88.88 0 0 1 .252.636v1.82h-1.756c.08.217.124.451.124.696v1.096h-6.236c-.747 0-1.372.27-1.876.809a2.701 2.701 0 0 0-.756 1.907c0 .751.252 1.387.756 1.907s1.13.79 1.876.81H24Zm0 0v-5.432h1.632c.579 0 1.055-.24 1.428-.723l.196-.404v-.058c.653.867.98 1.869.98 3.005 0 1.426-.504 2.63-1.512 3.612H24ZM3.764 6.97c0 .867.29 1.599.868 2.196V5.612c0-.25.084-.462.252-.636a.825.825 0 0 1 .616-.26h18.368c.261 0 .476.087.644.26a.879.879 0 0 1 .252.636v4.508c.28 0 .57.058.868.173V4.716c0-.27-.084-.481-.252-.635a1.034 1.034 0 0 0-.644-.26H6.816c-.84 0-1.559.308-2.156.924a3.083 3.083 0 0 0-.896 2.225Zm3.052 3.15c-.448 0-.887-.106-1.316-.318v-.578h18.368v.896H6.816ZM5.5 8.328h18.368v-.896H5.5v.896Zm18.368-1.791H5.5v-.925h18.368v.925Zm-7.336 11.356c-.355.366-.532.79-.532 1.271-.037.52.14.944.532 1.271.392.328.803.501 1.232.52.43.02.83-.153 1.204-.52.373-.365.55-.79.532-1.27a1.94 1.94 0 0 0-.532-1.272c-.336-.366-.737-.55-1.204-.55-.467 0-.877.184-1.232.55Z" fill="#231E18"></path><ellipse cx="22" cy="16.9639" rx="7.5" ry="7.73994" fill="#FEFEFC" stroke="#231E18" stroke-width="4"></ellipse><path fill-rule="evenodd" clip-rule="evenodd" d="M29.49 16.964c0 1.407-.331 2.7-.996 3.879a7.59 7.59 0 0 1-2.728 2.814 7.138 7.138 0 0 1-3.76 1.047 7.229 7.229 0 0 1-3.778-1.047 7.286 7.286 0 0 1-2.711-2.814c-.641-1.179-.98-2.472-1.014-3.88a7.018 7.018 0 0 1 1.014-3.878c.711-1.179 1.615-2.117 2.71-2.815 1.097-.697 2.356-1.046 3.778-1.046 1.423 0 2.676.349 3.76 1.046 1.085.698 1.994 1.636 2.729 2.815a6.552 6.552 0 0 1 .997 3.879Z" fill="#FEFEFC"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.006 15.988h3.989V14.57c0-.516-.196-.958-.588-1.326a1.945 1.945 0 0 0-1.414-.538 2.102 2.102 0 0 0-1.414.538 1.66 1.66 0 0 0-.573 1.326v1.418Zm6.494.696v4.228a.622.622 0 0 1-.224.486.835.835 0 0 1-.532.21h-7.488a.72.72 0 0 1-.532-.21.722.722 0 0 1-.224-.486v-4.228c0-.192.075-.359.224-.499a.704.704 0 0 1 .532-.197h.238V14.57c0-.893.345-1.663 1.035-2.31a3.478 3.478 0 0 1 2.464-.972c.952 0 1.778.324 2.478.971.7.648 1.04 1.418 1.021 2.311v1.418h.252c.215 0 .392.066.532.197.14.132.215.298.224.5Z" fill="#231E18"></path></svg></div>
            <h3 class="trust-highlight__heading collapse-bottom-small-only"><strong>Mua Sắm Trực Tuyến <br />Đảm Bảo An Toàn</strong></h3>
          </td>
          <td align='center'>
            <div data-type="block.settings.icon" class="trust-highlight__circle"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-double-tag" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.481 7.631c.396.397.594.88.594 1.447-.037.492-.235.965-.594 1.418-.358.454-.83.653-1.415.596-.585-.057-1.066-.255-1.443-.596-.378-.34-.576-.813-.595-1.418-.019-.605.18-1.087.595-1.447.415-.36.896-.548 1.443-.567a1.834 1.834 0 0 1 1.415.567Zm16.868 12c.377-.397.566-.88.566-1.447 0-.548-.189-1.02-.566-1.418L13.057 5.446c-.397-.396-.934-.737-1.614-1.02C10.764 4.142 10.151 4 9.603 4H3.01a2.035 2.035 0 0 0-1.415.624A1.94 1.94 0 0 0 1 6.043v6.581c0 .549.142 1.163.425 1.844.283.68.622 1.22 1.018 1.617l11.293 11.32c.377.396.844.595 1.4.595.557 0 1.043-.199 1.458-.596l7.755-7.773Zm-7.118-3.58a.433.433 0 0 0 .233-.252.417.417 0 0 0-.017-.345l-.378-.813a.433.433 0 0 0-.252-.234.432.432 0 0 0-.343.017l-3.912 1.835-.814-1.764a.433.433 0 0 0-.252-.234.432.432 0 0 0-.343.017l-.812.38a.448.448 0 0 0-.226.255.45.45 0 0 0 .01.341l1.384 2.976c.055.11.14.185.255.226a.446.446 0 0 0 .34-.009l5.127-2.396ZM31 18.184c0 .568-.198 1.05-.594 1.447l-7.755 7.773c-.415.397-.896.596-1.444.596-.377 0-.688-.076-.933-.227-.246-.151-.52-.388-.821-.71l7.415-7.432c.396-.397.594-.875.594-1.432 0-.558-.198-1.036-.594-1.433L15.576 5.446c-.397-.396-.934-.737-1.614-1.02C13.283 4.142 12.67 4 12.122 4h3.538c.548 0 1.16.142 1.84.426.68.283 1.217.624 1.613 1.02l11.293 11.32c.396.397.594.87.594 1.418Z" fill="#231E18"></path></svg></div>
            <h3 class="trust-highlight__heading collapse-bottom-small-only"><strong>Đơn Giá Đã Bao Gồm <br />Các Khoản Thuế</strong></h3>
          </td>
        </tr>
      </table>
      </div>

      {/* Phần Social Media */}
      <div class="social media" className='pt-8 pb-8 bg-black'>
        <table align='center'>
          <tr>
            <td>
              <div class="footer-social-link" className='p-2 '>
                <a href="#" title="Swee Lee Vietnam on Facebook" target="_blank" rel="noopener" data-ga-on="click" data-ga-event-category="Navigation" data-ga-event-action="Clicked Footer Link" data-ga-event-label="Facebook"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-facebook" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.185 10.156A14.736 14.736 0 0 0 1 15.983a16.793 16.793 0 0 0 1.185 5.826c.747 1.9 1.814 3.5 3.201 4.802a17.81 17.81 0 0 0 4.803 3.201c1.814.833 3.756 1.228 5.827 1.185 2.07-.043 4.012-.438 5.827-1.185a14.227 14.227 0 0 0 4.77-3.2 15.263 15.263 0 0 0 3.202-4.803c.768-1.814 1.163-3.756 1.184-5.826.021-2.07-.373-4.012-1.184-5.827-.812-1.814-1.879-3.404-3.202-4.77-1.323-1.365-2.913-2.432-4.77-3.2A15.528 15.528 0 0 0 16.016 1a14.03 14.03 0 0 0-5.827 1.184c-1.857.811-3.458 1.878-4.803 3.202C4.042 6.71 2.974 8.3 2.185 10.157ZM14.145 16H12.5v-2.751h1.644v-1.644c0-1.18.274-2.077.822-2.688.549-.611 1.466-.917 2.751-.917h2.214v2.751h-1.36c-.485.021-.79.105-.917.253-.126.148-.19.432-.19.854v1.391h2.498L19.678 16h-2.214v8h-3.32v-8Z" fill="#FFFFFF"></path></svg>
                </a>
              </div>
            </td>
            <td>
              <div class="footer-social-link" className='p-2'>
                <a href="#" title="Swee Lee Vietnam on Instagram" target="_blank" rel="noopener" data-ga-on="click" data-ga-event-category="Navigation" data-ga-event-action="Clicked Footer Link" data-ga-event-label="Instagram"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-instagram" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 1C7.716 1 1 7.716 1 16c0 8.284 6.715 15 15 15 8.286 0 15-6.716 15-15 0-8.284-6.715-15-15-15Zm8.697 18.375a5.328 5.328 0 0 1-5.323 5.323h-6.748a5.328 5.328 0 0 1-5.322-5.323v-6.75a5.328 5.328 0 0 1 5.322-5.322h6.748a5.328 5.328 0 0 1 5.323 5.322v6.75Zm-5.323-10.45h-6.748c-2.04 0-3.7 1.66-3.7 3.7v6.75c0 2.04 1.66 3.7 3.7 3.7h6.748c2.04 0 3.7-1.66 3.7-3.7v-6.75c0-2.04-1.66-3.7-3.7-3.7ZM16 20.603a4.557 4.557 0 0 1-4.553-4.552 4.558 4.558 0 0 1 4.553-4.553 4.556 4.556 0 0 1 4.551 4.553 4.556 4.556 0 0 1-4.551 4.552Zm4.65-7.991a1.07 1.07 0 1 1 0-2.142 1.07 1.07 0 0 1 0 2.142Zm-4.65 6.368a2.933 2.933 0 0 0 2.929-2.929 2.932 2.932 0 0 0-2.93-2.93 2.934 2.934 0 0 0-2.93 2.93 2.934 2.934 0 0 0 2.93 2.93Z" fill="#FFFFFF"></path></svg>
                </a>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <hr className='lg:border-white border-' />

      {/* Phần Contact */}
      <div class="contact" className='flex bg-black text-white'>
        <div class='image' className='w-[24%] p-5'>
          <a href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&usqp=CAU" alt="Gakki" />
          </a>
        </div>
        <div class='info' className='w-[24%] p-5'>
          <div className='text-center font-bold'>THÔNG TIN LIÊN HỆ</div>
          <table > 
            <tr>
              <td valign='top'><div className='p-1 m-2 rounded-full shadow bg-white text-gray-800'><a href="#"><FaMapLocationDot size="20"/></a></div></td>
              <td>Số 669 Quốc lộ 1A, Khu phố 3, phường Linh Xuân, TP Thủ Đức, TP Hồ Chí Minh</td>
            </tr>
            <tr>
              <td><div className='p-1 m-2 rounded-full shadow bg-white text-gray-800'><a href="#"><MdLocalPhone size="20"/></a></div></td>
              <td>090909090</td>
            </tr>
            <tr>
              <td><div className='p-1 m-2 rounded-full shadow bg-white text-gray-800'><a href="#"><CiMail size="20"/></a></div></td>
              <td>gakki.support@gmail.com</td>
            </tr>
          </table>
        </div>  
        <div class='policy' className='w-[24%] p-5'>
          <div className='font-bold'>CHÍNH SÁCH VÀ HỖ TRỢ</div>
          <div className='leading-8'>
            <a href="#" className='hover:underline'>Điều khoản dịch vụ</a><br />
            <a href="#" className='hover:underline'>Chính sách bảo mật</a><br />
            <a href="#" className='hover:underline'>Chính sách đổi trả</a><br />
            <a href="#" className='hover:underline'>Chế độ bảo hành</a>
          </div>
        </div>
        <div class='login' className='w-[24%] p-5'>
          <div className='text-center pb-2'>Đăng ký nhận thông báo qua mail</div>
          <div className='leading-8'>            
          <button className='border-black border-2 p-2 w-[100%] font-bold border-radius-20 bg-yellow-600'>Đăng ký</button><br />
          <a href="#" className='hover:underline'>Hướng dẫn mua hàng</a><br />
          <a href="#" className='hover:underline'>Tìm cửa hàng</a><br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
