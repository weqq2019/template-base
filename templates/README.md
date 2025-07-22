# {{PROJECT_NAME}}

> **基于{{TECH_STACK}}的{{PROJECT_TYPE}}项目**  
> **技术栈**: {{TECH_STACK_DETAIL}}  
> **团队规模**: {{TEAM_SIZE}}

---

## 📊 项目概览

{{PROJECT_DESCRIPTION}}

本项目基于现代化开发规范，提供标准化的项目结构、开发规范和AI协作流程。

### 🎯 模板特点
- ✨ **技术栈无关**: 支持前端、后端、全栈等多种项目配置
- 🏗️ **架构现代化**: 遵循现代化开发架构和最佳实践
- 📏 **规范化开发**: 建立完整的开发规范和质量标准
- 🚀 **AI协作友好**: 深度集成Claude Code提升开发效率
- 📚 **新手友好**: 详细的学习指南和项目管理工具

---

## 🔍 支持的技术栈

| 技术领域 | 推荐选择 | 特点 |
|----------|----------|------|
| **前端框架** | Vue3 / React / Angular | 组件化、响应式、现代化 |
| **后端框架** | Node.js / Python / Java / Go | 高性能、可扩展、云原生 |
| **数据库** | MySQL / PostgreSQL / MongoDB | 关系型、文档型、灵活配置 |
| **构建工具** | Vite / Webpack / Rollup | 快速构建、热重载、优化 |
| **代码规范** | ESLint + Prettier | 统一风格、自动格式化 |
| **测试框架** | Vitest / Jest / Cypress | 单元测试、集成测试、E2E |

---

## 🚀 快速开始

### ⚡ 方法1: 智能配置器 (推荐)

**90%+自动化，5分钟完成项目初始化**

```bash
# 1. 进入模板目录
cd template-base

# 2. 运行智能配置器
node configs/project-configurator.js

# 3. 按指引选择配置，自动创建定制化项目
```

### 🛠️ 方法2: 交互式脚本初始化

```bash
# 1. 复制模板
cp -r template-base /path/to/your-new-project
cd /path/to/your-new-project

# 2. 运行初始化脚本
./init-project.sh

# 3. 按提示完成项目配置
```

### 📚 详细使用指南
查看 **[USAGE.md](./USAGE.md)** 获取完整的使用说明和最佳实践。

### 环境要求
- Node.js 18+ (智能配置器需要)
- Git (自动初始化仓库)  
- VS Code (推荐，工作区已配置)

---

## 📚 文档导航

| 文档 | 说明 |
|------|------|
| 📋 [todo.md](./doc/todo.md) | TODO清单&项目管理指南 |
| 📁 [structure.md](./structure.md) | 项目结构和版本记录 |
| 🛠️ [CLAUDE.md](./CLAUDE.md) | Claude Code配置和开发规范 |
| 📝 [CHANGELOG.md](./CHANGELOG.md) | 版本变更历史 |

---

## 🎯 项目特色

### ✅ 开发规范
1. **Git工作流**: 遵循 Angular Commit规范 + emoji标准
2. **代码质量**: 内置ESLint、Prettier、测试覆盖率要求
3. **文档管理**: 自动化文档维护和版本跟踪
4. **AI协作**: Claude Code深度集成，提升开发效率

### 📊 质量标准
- **测试覆盖率**: ≥90%
- **代码规范**: 0错误率
- **提交规范**: Conventional Commits + emoji
- **文档完整性**: 同步更新，版本追踪

### 🎨 架构模式
- **单一职责**: 每个文件/模块专注一个功能
- **组件化开发**: 可复用、可测试、可维护
- **状态集中管理**: 统一状态管理模式
- **API统一封装**: 标准化接口封装

---

## 🛠️ 开发流程

### 📋 项目初始化
1. 复制模板并配置Git仓库
2. 选择适合的技术栈
3. 配置开发环境和工具
4. 阅读 `doc/todo.md` 学习指南

### 🚀 开发实施
1. 遵循 `CLAUDE.md` 中的开发规范
2. 使用 `/commit` 命令进行标准化提交
3. 定期更新 `todo.md` 跟踪进度
4. 维护测试覆盖率和代码质量

### 📊 质量保证
1. 执行自动化测试
2. 代码审查和重构
3. 性能监控和优化
4. 文档更新和维护

---

## 🎓 学习资源

### 📚 新手指南
- **基础技能**: Git、VS Code、Claude Code协作
- **前端技术**: HTML/CSS/JavaScript + 现代框架
- **后端技术**: 服务器开发、数据库、API设计
- **全栈技能**: 前后端集成、部署运维

### 🔗 推荐资源
- **官方文档**: 各技术栈官方文档和最佳实践
- **社区教程**: GitHub、掘金、Stack Overflow
- **实战项目**: 开源项目学习和贡献
- **AI协作**: Claude Code使用技巧和协作模式

---

## 📝 开发规范

### Git工作流
1. 遵循 [Angular Commit规范](./project-rules-cn/commit.mdc)
2. 使用 `/commit` 或 `/push` 命令进行提交
3. 提交格式：`<emoji> <type>(scope): <description> #issue-number`
4. 保持提交原子化和描述清晰
5. 推荐关联Issue编号便于项目管理

### 代码规范
1. 使用对应技术栈的官方代码规范
2. 配置ESLint + Prettier自动格式化
3. 维护测试覆盖率≥90%
4. 提交前执行代码检查

### 文档维护
遵循自动化文档维护机制（详细规范参考 `CLAUDE.md`）

---

## 🚀 项目状态

当前为通用开发模板v1.0，支持多种技术栈配置，具备完整的开发规范和AI协作能力。

### 🎯 适用场景
- **企业级项目**: 需要严格开发规范的商业项目
- **开源项目**: 需要社区贡献和协作的开源项目
- **学习项目**: 新手学习现代化开发流程
- **快速原型**: 需要快速启动的MVP项目

---

## 🔗 相关资源

- 📖 **开发规范**: [project-rules-cn/](./project-rules-cn/)
- 🛠️ **Claude Code**: [claude.ai/code](https://claude.ai/code)
- 📚 **Agent Rules**: [steipete/agent-rules](https://github.com/steipete/agent-rules)
- 🐛 **问题反馈**: 项目Issues页面

---

**💪 核心优势**: 标准化模板 + AI辅助开发，快速启动任何类型的现代化项目！

**🎯 使用建议**: 基于具体需求定制配置，保持模板通用性和扩展性。