// --- Utility ---
function stripNonBMP(str) {
    return str.replace(/[\u{10000}-\u{10FFFF}]/gu, '');
}

// --- Shared MJML head (fonts + attribute defaults) ---
const _head = `
  <mj-head>
    <mj-font name="Noto Serif TC" href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@700;900&amp;display=swap"/>
    <mj-attributes>
      <mj-all font-family="Helvetica, Arial, sans-serif"/>
      <mj-section background-color="#ffffff" padding="0"/>
      <mj-text color="#111111" font-size="14px" line-height="1.6" padding="10px 40px"/>
    </mj-attributes>
  </mj-head>`;

// --- MJML Template presets ---
const mjmlTemplates = {

  seminar: `<mjml>${_head}
  <mj-body background-color="#faf9f7">
    <mj-section padding="40px 30px 20px">
      <mj-column>
        <mj-text align="center" font-family="'Noto Serif TC', serif" font-size="28px" font-weight="900" color="#ba372a" padding="0">研討會／論壇主標題</mj-text>
        <mj-text align="center" font-size="13px" color="#7e8c8d" letter-spacing="1px" padding="10px 0 0">YYYY/MM/DD | 地點</mj-text>
      </mj-column>
    </mj-section>
    <mj-section padding="0">
      <mj-column padding="0">
        <mj-image src="taipei-cycle.png" alt="主視覺" padding="0" fluid-on-mobile="true"/>
      </mj-column>
    </mj-section>
    <mj-section padding="20px 0">
      <mj-column width="45%" padding="0 0 0 40px">
        <mj-image src="sourcing-split.png" alt="圖片" padding="0"/>
      </mj-column>
      <mj-column width="55%" padding="0 40px 0 20px">
        <mj-text padding="0"><strong>活動亮點</strong><br/>活動說明文字，請輸入詳細內容。</mj-text>
      </mj-column>
    </mj-section>
    <mj-section padding="20px 40px 40px">
      <mj-column>
        <mj-button background-color="#111111" color="#ffffff" font-size="14px" font-weight="bold" letter-spacing="1px" inner-padding="14px 32px" border-radius="0" href="#">立即報名</mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`,

  mission: `<mjml>${_head}
  <mj-body background-color="#faf9f7">
    <mj-section padding="0">
      <mj-column padding="0">
        <mj-image src="taipei-cycle.png" alt="主視覺" padding="0" fluid-on-mobile="true"/>
      </mj-column>
    </mj-section>
    <mj-section padding="40px 30px 20px">
      <mj-column>
        <mj-text align="center" font-family="'Noto Serif TC', serif" font-size="28px" font-weight="900" color="#111111" padding="0">拓銷團主標題</mj-text>
        <mj-text align="center" font-size="13px" color="#7e8c8d" padding="10px 0 0">YYYY/MM/DD — YYYY/MM/DD | 目的地</mj-text>
      </mj-column>
    </mj-section>
    <mj-section padding="20px 0">
      <mj-column width="45%" padding="0 0 0 40px">
        <mj-image src="sourcing-split.png" alt="圖片" padding="0"/>
      </mj-column>
      <mj-column width="55%" padding="0 40px 0 20px">
        <mj-text padding="0"><strong>行程亮點</strong><br/>行程說明文字，請輸入詳細內容。</mj-text>
      </mj-column>
    </mj-section>
    <mj-section padding="20px 40px 40px">
      <mj-column>
        <mj-button background-color="#111111" color="#ffffff" font-size="14px" font-weight="bold" letter-spacing="1px" inner-padding="14px 32px" border-radius="0" href="#">立即報名</mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`,

  expo: `<mjml>${_head}
  <mj-body background-color="#faf9f7">
    <mj-section padding="0">
      <mj-column padding="0">
        <mj-image src="taipei-cycle.png" alt="展覽主視覺" padding="0" fluid-on-mobile="true"/>
      </mj-column>
    </mj-section>
    <mj-section padding="40px 30px 20px">
      <mj-column>
        <mj-text align="center" font-family="'Noto Serif TC', serif" font-size="28px" font-weight="900" color="#111111" padding="0">展覽主標題</mj-text>
        <mj-text align="center" font-size="13px" color="#7e8c8d" padding="10px 0 0">YYYY/MM/DD | 展覽地點</mj-text>
      </mj-column>
    </mj-section>
    <mj-section padding="0 0 20px">
      <mj-column>
        <mj-text>展覽說明文字，請輸入詳細內容。本展覽集合業界精英，帶來最新趨勢與商機。</mj-text>
      </mj-column>
    </mj-section>
    <mj-section padding="10px 40px 40px">
      <mj-column>
        <mj-button background-color="#111111" color="#ffffff" font-size="14px" font-weight="bold" letter-spacing="1px" inner-padding="14px 32px" border-radius="0" href="#">立即報名</mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`,

  course: `<mjml>${_head}
  <mj-body background-color="#faf9f7">
    <mj-section padding="40px 30px 20px">
      <mj-column>
        <mj-text align="center" font-family="'Noto Serif TC', serif" font-size="28px" font-weight="900" color="#111111" padding="0">訓練課程標題</mj-text>
        <mj-text align="center" font-size="13px" color="#7e8c8d" padding="10px 0 0">YYYY/MM/DD | 上課地點</mj-text>
      </mj-column>
    </mj-section>
    <mj-section padding="0">
      <mj-column padding="0">
        <mj-image src="taipei-cycle.png" alt="課程主視覺" padding="0" fluid-on-mobile="true"/>
      </mj-column>
    </mj-section>
    <mj-section padding="20px 0 10px">
      <mj-column>
        <mj-text>課程說明文字，請輸入課程目標、適合對象及課程內容說明。</mj-text>
      </mj-column>
    </mj-section>
    <mj-section padding="10px 0">
      <mj-column width="45%" padding="0 0 0 40px">
        <mj-image src="sourcing-split.png" alt="圖片" padding="0"/>
      </mj-column>
      <mj-column width="55%" padding="0 40px 0 20px">
        <mj-text padding="0"><strong>課程特色</strong><br/>請輸入詳細特色說明。</mj-text>
      </mj-column>
    </mj-section>
    <mj-section padding="20px 40px 40px">
      <mj-column>
        <mj-button background-color="#111111" color="#ffffff" font-size="14px" font-weight="bold" letter-spacing="1px" inner-padding="14px 32px" border-radius="0" href="#">立即報名</mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`,

  newsletter: `<mjml>${_head}
  <mj-body background-color="#F8F8F8">
    <mj-section background-color="#F8F8F8" padding="20px 30px">
      <mj-column>
        <mj-image src="verse-header.jpg" alt="Newsletter Header" padding="0" fluid-on-mobile="true"/>
      </mj-column>
    </mj-section>
    <mj-section background-color="#FFFFFF" padding="30px 40px 10px">
      <mj-column>
        <mj-text font-family="'Noto Serif TC', serif" font-size="22px" font-weight="700" padding="0 0 15px">電子報問候語</mj-text>
        <mj-text padding="0">親愛的讀者，歡迎收到本期電子報。以下是本期精選內容，請享閱。</mj-text>
      </mj-column>
    </mj-section>
    <mj-section background-color="#FFFFFF" padding="20px 40px 10px">
      <mj-column>
        <mj-image src="taipei-cycle.png" alt="文章圖片" padding="0" fluid-on-mobile="true"/>
        <mj-text font-size="18px" font-weight="700" padding="15px 0 5px">文章標題一</mj-text>
        <mj-text padding="0 0 5px">文章摘要內容，請輸入文章簡介。讓讀者了解文章重點，引起閱讀興趣。</mj-text>
        <mj-divider border-color="#111111" border-width="1px" padding="15px 0 0"/>
      </mj-column>
    </mj-section>
    <mj-section background-color="#FFFFFF" padding="20px 40px 30px">
      <mj-column>
        <mj-image src="sourcing-split.png" alt="文章圖片" padding="0" fluid-on-mobile="true"/>
        <mj-text font-size="18px" font-weight="700" padding="15px 0 5px">文章標題二</mj-text>
        <mj-text padding="0">文章摘要內容，請輸入文章簡介。讓讀者了解文章重點，引起閱讀興趣。</mj-text>
      </mj-column>
    </mj-section>
    <mj-section background-color="#F8F8F8" padding="20px">
      <mj-column><mj-spacer height="10px"/></mj-column>
    </mj-section>
  </mj-body>
</mjml>`
};

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {

    // Resolve plugin: try common UMD global names
    const mjmlPlugin = window.gjsMjml || window['grapesjs-mjml'] || window.grapesjs_mjml;

    if (!mjmlPlugin) {
        document.getElementById('gjs').innerHTML =
            '<p style="padding:40px;color:#c00;font-family:sans-serif;">grapesjs-mjml 插件載入失敗，請檢查網路連線後重新整理。</p>';
    }

    const editor = grapesjs.init({
        container: '#gjs',
        height: '100%',
        fromElement: false,
        plugins: mjmlPlugin ? [mjmlPlugin] : [],
        blockManager: {
            appendTo: '#gjs-blocks',
            blocks: []
        },
        styleManager: { sectors: [] },
        storageManager: false,
        panels: { defaults: [] },
        deviceManager: {
            devices: [{ name: 'Desktop', width: '600px', widthMedia: '' }]
        }
    });

    // --- Template buttons ---
    document.querySelectorAll('.template-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            const type = e.target.getAttribute('data-type');
            if (mjmlTemplates[type]) {
                editor.setComponents(mjmlTemplates[type]);
            }
        });
    });

    // --- Draft management ---
    const savedListContainer = document.getElementById('saved-list');

    async function loadSavedList() {
        savedListContainer.innerHTML = '';
        try {
            const keys = await localforage.keys();
            const drafts = keys.filter(k => k.startsWith('edm_draft_')).sort().reverse();
            if (!drafts.length) {
                savedListContainer.innerHTML = '<span style="color:#999; font-size: 13px;">尚無儲存草稿</span>';
                return;
            }
            for (const key of drafts) {
                const data = await localforage.getItem(key);
                if (!data) continue;
                const div = document.createElement('div');
                div.className = 'saved-item';
                const span = document.createElement('span');
                span.title = `${data.subject || ''} — ${data.dateStr || ''}`;
                span.textContent = `${data.subject || '未命名草稿'}  ${data.dateStr || ''}`;
                span.addEventListener('click', () => loadDraft(data));
                const delBtn = document.createElement('button');
                delBtn.className = 'del-draft-btn';
                delBtn.textContent = '×';
                delBtn.addEventListener('click', async ev => {
                    ev.stopPropagation();
                    await localforage.removeItem(key);
                    loadSavedList();
                });
                div.appendChild(span);
                div.appendChild(delBtn);
                savedListContainer.appendChild(div);
            }
        } catch (err) {
            savedListContainer.innerHTML = '<span style="color:#c00; font-size: 13px;">載入失敗</span>';
        }
    }

    function loadDraft(data) {
        if (data.html && !data.projectData) {
            alert('此草稿為舊版格式（TinyMCE），無法在新版編輯器載入。\n請重新建立內容。');
            return;
        }
        try {
            editor.loadProjectData(data.projectData);
            document.getElementById('meta-subject').value = data.subject || '';
        } catch (err) {
            alert('草稿載入失敗：' + err);
        }
    }

    document.getElementById('btn-save').addEventListener('click', async () => {
        const subject = document.getElementById('meta-subject').value || '未命名草稿';
        try {
            const data = {
                projectData: editor.getProjectData(),
                subject,
                dateStr: new Date().toLocaleString()
            };
            await localforage.setItem('edm_draft_' + Date.now(), data);
            alert('草稿已儲存！');
            loadSavedList();
        } catch (err) {
            alert('儲存失敗：' + err);
        }
    });

    // --- Export ZIP ---
    document.getElementById('btn-export').addEventListener('click', async () => {
        const subject = document.getElementById('meta-subject').value || '未命名 EDM';

        let compiledHTML = null;

        // Method A: mjml2html bundled with grapesjs-mjml
        try {
            const mjmlSrc = editor.getHtml();
            if (window.mjml2html && mjmlSrc && mjmlSrc.trim().startsWith('<mjml')) {
                const result = window.mjml2html(mjmlSrc);
                compiledHTML = result.html;
            }
        } catch (e) {
            console.warn('mjml2html method failed:', e);
        }

        // Method B: canvas iframe content
        if (!compiledHTML) {
            try {
                const frame = editor.Canvas.getFrameEl();
                if (frame && frame.contentDocument) {
                    compiledHTML = '<!DOCTYPE html>\n' + frame.contentDocument.documentElement.outerHTML;
                }
            } catch (e) {
                console.warn('iframe method failed:', e);
            }
        }

        if (!compiledHTML) {
            alert('無法取得 HTML，請先選擇範本並確認內容已建立。');
            return;
        }

        const parser = new DOMParser();
        const doc = parser.parseFromString(compiledHTML, 'text/html');

        const zip = new JSZip();
        const imgFolder = zip.folder('images');
        let imgCount = 1;

        for (const img of doc.querySelectorAll('img')) {
            const src = img.getAttribute('src');
            let base64Data = null;
            let ext = 'png';

            if (src && src.startsWith('data:image/')) {
                const parts = src.split(',');
                const meta = parts[0].match(/:(.*?);/);
                ext = meta ? (meta[1].split('/')[1] || 'png') : 'png';
                base64Data = parts[1];
            } else if (src && src.trim() !== '') {
                try {
                    const res = await fetch(src);
                    if (res.ok) {
                        const blob = await res.blob();
                        ext = (blob.type.split('/')[1] || 'png').replace('jpeg', 'jpg');
                        base64Data = await new Promise(resolve => {
                            const reader = new FileReader();
                            reader.onload = e => resolve(e.target.result.split(',')[1]);
                            reader.readAsDataURL(blob);
                        });
                    }
                } catch (_) {}
            }

            if (base64Data) {
                const fileName = `img_${String(imgCount).padStart(2, '0')}.${ext}`;
                imgFolder.file(fileName, base64Data, { base64: true });
                img.setAttribute('src', `images/${fileName}`);
                imgCount++;
            }
        }

        const titleEl = doc.querySelector('title');
        if (titleEl) titleEl.textContent = subject;

        const finalHTML = stripNonBMP('<!DOCTYPE html>\n' + doc.documentElement.outerHTML);
        zip.file('edm.html', finalHTML);

        try {
            const content = await zip.generateAsync({ type: 'blob' });
            saveAs(content, `EDM_Package_${Date.now()}.zip`);
        } catch (err) {
            alert('打包 ZIP 時發生錯誤：' + err);
        }
    });

    loadSavedList();
});
