# Illustration Audit Report

**Generated:** 2026-01-06T16:50:08.605Z
**Scanned:** `src/components/hub/illustrations`
**Files:** 13

---

## 📊 Summary

| Metric | Count | Values |
|--------|-------|--------|
| Unique colors | **2** | - |
| strokeWidth | **9** | 0.8, 1, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.5 |
| rx values | **17** | 0.4, 0.5, 0.75, 0.8, 1, 1.2, 1.5, 1.6, 2, 2.5... |
| ry values | **2** | 10, 8 |
| opacity values | **12** | 0, 0.06, 0.08, 0.15, 0.3, 0.5, 0.7, 0.75, 0.8, 0.85, 0.9, 1 |

## 🎨 Colors by Category

### Gray (1)
```
#F9FAFB
```

### White (1)
```
#FFFFFF
```

## ⚠️ Potential Inconsistencies

### StrokeWidth Variants (9 different values)
Consider standardizing to 1-2 values (e.g., `1.5` and `2`):
`0.8, 1, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.5`

### Opacity Variants (12 different values)
Consider standardizing decorative opacities:
`0, 0.06, 0.08, 0.15, 0.3, 0.5, 0.7, 0.75, 0.8, 0.85, 0.9, 1`

---

## 📁 Per-File Details

### src/components/hub/illustrations/AllInOneProblemsIllustration.tsx
| Attribute | Values |
|-----------|--------|
| strokeWidth | 1 |
| rx | 1 |
| ry | - |
| opacity | - |
| colors (1) | #FFFFFF |

### src/components/hub/illustrations/DataIntegrationIllustration.tsx
| Attribute | Values |
|-----------|--------|
| strokeWidth | 1 |
| rx | 0.5, 0.75, 1, 38, 45 |
| ry | 10, 8 |
| opacity | 0.3, 0.5, 0.7 |
| colors (1) | #FFFFFF |

### src/components/hub/illustrations/EigentuemerFlowDiagram.tsx
| Attribute | Values |
|-----------|--------|
| strokeWidth | 1, 1.1, 1.2 |
| rx | 0.5, 0.8, 1, 1.2, 2 |
| ry | - |
| opacity | 0, 0.5, 0.7, 1 |
| colors (1) | #FFFFFF |

### src/components/hub/illustrations/HubHeroIllustration.tsx
| Attribute | Values |
|-----------|--------|
| strokeWidth | 1, 1.3, 1.6 |
| rx | 0.5, 0.8, 1, 1.6 |
| ry | - |
| opacity | 0, 0.06, 0.75, 1 |
| colors (1) | #FFFFFF |

### src/components/hub/illustrations/ServiceAccountingIllustration.tsx
| Attribute | Values |
|-----------|--------|
| strokeWidth | - |
| rx | 1, 1.5, 2, 4, 6, 8 |
| ry | - |
| opacity | 0.15, 0.3, 0.8, 0.85, 0.9 |
| colors (1) | #FFFFFF |

### src/components/hub/illustrations/ServiceDokumenteIllustration.tsx
| Attribute | Values |
|-----------|--------|
| strokeWidth | 2.5 |
| rx | 1, 1.5, 2, 3, 6 |
| ry | - |
| opacity | 0.3 |
| colors (1) | #FFFFFF |

### src/components/hub/illustrations/ServiceFlowDiagram.tsx
| Attribute | Values |
|-----------|--------|
| strokeWidth | 1.2, 1.3 |
| rx | 0.4, 0.5, 0.8, 1, 1.5, 2 |
| ry | - |
| opacity | 0, 0.5, 1 |
| colors (1) | #FFFFFF |

### src/components/hub/illustrations/ServiceNebenkostenCheckIllustration.tsx
| Attribute | Values |
|-----------|--------|
| strokeWidth | 1.8, 2.5 |
| rx | 4, 8 |
| ry | - |
| opacity | 0.15 |
| colors (1) | #F9FAFB |

### src/components/hub/illustrations/ServiceNebenkostenIllustration.tsx
| Attribute | Values |
|-----------|--------|
| strokeWidth | 1 |
| rx | 1, 1.5, 3, 4, 6, 7 |
| ry | - |
| opacity | 0.3 |
| colors (1) | #FFFFFF |

### src/components/hub/illustrations/ServiceVorgaengeIllustration.tsx
| Attribute | Values |
|-----------|--------|
| strokeWidth | 1 |
| rx | 1, 1.5, 2, 3, 6 |
| ry | - |
| opacity | 0.15, 0.3 |
| colors (1) | #FFFFFF |

### src/components/hub/illustrations/ServiceWEGIllustration.tsx
| Attribute | Values |
|-----------|--------|
| strokeWidth | 0.8, 1 |
| rx | 0.5, 0.75, 1, 2, 2.5, 3, 4, 6 |
| ry | - |
| opacity | 0.3 |
| colors (1) | #FFFFFF |

### src/components/hub/illustrations/TransitionVisualization.tsx
| Attribute | Values |
|-----------|--------|
| strokeWidth | - |
| rx | - |
| ry | - |
| opacity | 0.3 |
| colors (1) | #FFFFFF |

### src/components/hub/illustrations/WegoraModularIllustration.tsx
| Attribute | Values |
|-----------|--------|
| strokeWidth | 0.8, 1, 1.5 |
| rx | 0.5, 1, 1.5, 3, 8 |
| ry | - |
| opacity | 0.08 |
| colors (1) | #FFFFFF |

---

## 💡 Recommendations

### Token Consolidation
Based on this audit, consider creating these illustration tokens:

```css
:root {
  /* Illustration tokens */
  --illustration-stroke-width: 2px;
  --illustration-radius: 12px;
  --illustration-deco-opacity: 0.1;
  
  /* Map to existing design tokens */
  --illustration-ink: var(--foreground);
  --illustration-primary: var(--primary);
  --illustration-muted: var(--muted-foreground);
  --illustration-border: var(--border);
}
```
