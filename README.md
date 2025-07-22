# Claude Code智能项目模板系统

> **Pure AI驱动的项目生成解决方案**  
> **技术栈**: Node.js + JavaScript + Bash  
> **团队规模**: 个人开发 + AI协作

---

## 📊 项目概览

Claude Code智能项目模板系统是一个100% AI驱动的项目生成器，用户只需用自然语言描述项目想法，系统会自动：

- 🤖 **智能分析项目类型** - 基于描述识别游戏、管理系统、工具应用等
- 🛠️ **推荐最佳技术栈** - 根据项目需求智能选择技术方案
- 📁 **生成合适项目名** - 自动生成符合规范的英文项目名
- 📝 **创建个性化文档** - 生成项目特定的README、开发计划、任务清单
- 🚀 **一键启动开发** - 从想法到可开发项目，3分钟内完成

---

## 🎯 核心特性

### 🔥 **纯Claude Code驱动**
- ❌ **无预设规则** - 不包含任何硬编码的项目类型映射
- 🤖 **AI智能分析** - 完全基于Claude Code的自然语言理解
- 📋 **个性化生成** - 每个项目都是量身定制的技术方案
- ⚡ **一键触发** - 使用 `@.claude_analysis_request.md 执行这个分析请求`

### 🚀 **完整工作流程**
```bash
# 1. 创建项目
node configs/project-configurator.js
# 输入：蛇吃块小游戏 WEB 个人

# 2. 启动Claude Code
cd ../awaiting-claude-analysis
claude

# 3. 一键触发智能分析
@.claude_analysis_request.md 执行这个分析请求

# 4. 自动完成所有任务
# ✅ AI智能分析项目类型
# ✅ 自动重命名项目文件夹
# ✅ 生成个性化README、structure、todo、changelog
```

---

## 📁 项目结构

```
template-base/
├── 📋 项目文档
│   ├── README.md                    # template-base项目说明(本文件)
│   ├── CHANGELOG.md                 # template-base开发变更记录
│   ├── structure.md                 # template-base项目结构
│   └── doc/
│       └── todo.md                  # template-base开发任务
│
├── 📁 templates/ (纯模板文件)
│   ├── README.md                    # {{PROJECT_NAME}}模板
│   ├── CLAUDE.md                    # 开发规范模板
│   ├── CHANGELOG.md                 # {{PROJECT_NAME}}模板
│   ├── structure.md                 # {{PROJECT_NAME}}模板
│   └── doc/
│       └── todo.md                  # {{PROJECT_NAME}}模板
│
├── 🤖 AI智能系统
│   ├── configs/
│   │   └── project-configurator.js # Pure AI配置器
│   ├── ai-analyzer.js               # AI智能分析器
│   └── init-project-simple.sh      # 项目创建脚本
│
├── 📚 文档和指南
│   ├── USAGE.md                     # 完整使用指南
│   └── doc/
│       └── Claude Code智能项目创建完整流程.md
│
└── 🛠️ 开发规范
    └── project-rules-cn/            # Git提交规范
```

---

## 🚀 快速开始

### 环境要求
- Node.js 18+
- Git
- Claude Code

### 使用方法
```bash
# 进入模板目录
cd template-base

# 运行智能配置器
node configs/project-configurator.js

# 输入项目描述（支持中文）
# 例如：蛇吃块小游戏 WEB 个人

# 进入生成的项目并启动Claude Code
cd ../awaiting-claude-analysis
claude

# 在Claude Code中触发智能分析
@.claude_analysis_request.md 执行这个分析请求
```

---

## 🎨 技术架构

### 🤖 **AI智能核心**
- **项目配置器** - Pure AI驱动的项目信息收集
- **智能分析器** - 基于描述生成占位符和分析请求
- **Claude Code集成** - 一键触发完整智能分析流程

### 📋 **模板系统**
- **模板分离** - templates/目录存放纯模板文件
- **变量替换** - 支持 `{{PROJECT_NAME}}` 等模板变量
- **智能生成** - Claude Code根据分析结果生成个性化内容

### 🔧 **自动化流程**
- **项目创建** - 自动复制模板文件和初始化Git
- **文档生成** - AI智能生成项目特定的文档内容
- **即开即用** - 生成后立即可开始开发

---

## 📈 开发历史

详细变更记录请查看：[CHANGELOG.md](./CHANGELOG.md)

**当前版本**: v3.0 - 纯Claude Code驱动系统

---

## 🎯 设计理念

### 💡 **核心原则**
1. **Pure AI驱动** - 零硬编码规则，完全基于AI智能分析
2. **用户友好** - 中文输入，自然语言描述，零学习成本
3. **即开即用** - 从想法到可开发项目，3分钟内完成
4. **高度智能** - 每个项目都是个性化的技术方案

### 🔥 **创新点**
- **首创** 纯Claude Code驱动的项目生成器
- **独创** `@文件引用` 触发方式，一键完成所有分析
- **突破** 传统模板限制，实现真正的AI智能内容生成
- **实现** 中文描述到英文项目的无缝转换

---

## 🤝 贡献指南

这是一个实验性项目，展示了AI驱动开发的可能性。

### 贡献方向
- 💡 优化AI分析逻辑
- 🎨 增加更多模板变体
- 🔧 改进用户体验
- 📚 完善文档和示例

---

## 📄 许可证

MIT License - 自由使用和修改

---

**🎉 让AI成为你的最佳开发伙伴！**

**核心价值**: 中文描述 → AI智能分析 → 个性化项目生成，3分钟内完成！