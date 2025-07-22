# Project Rules - English Version

> **Based on [Agent Rules](https://github.com/steipete/agent-rules) Project - English Standardized Version**  
> **Applicable to Claude Code AI Assistant Development Workflow Standards**

---

## 📋 Rules File Overview

| File | Command | Function Description | Issue Number Support |
|------|---------|---------------------|---------------------|
| **commit.mdc** | `/commit` | Standard Git commit workflow with full pre-checks | ✅ Full support |
| **push.mdc** | `/push` | One-click push workflow: auto-stage + commit + push | ✅ Full support |
| **commit-fast.mdc** | `/commit-fast` | Fast commit, skip pre-checks, for minor changes | ✅ Full support |
| **changelog.mdc** | `/changelog` | Manual CHANGELOG.md updates as supplement to auto-maintenance | ✅ Full support |

---

## 🎯 Unified Issue Number Support Standard

### 📊 Commit Message Format
All specification files uniformly use the following format:
```
<emoji> <type>(<scope>): <description> #issue-number
```

### 🎯 Issue Number Classification Mapping
Based on 10 number range classification system (detailed classification refer to `@structure.md`):
- Commit types automatically mapped to corresponding number ranges
- AI intelligent assignment of available numbers, avoiding conflicts
- Support for user manual specification with priority

### 📝 Issue Association in CHANGELOG
- `(closes #123)` - Close Issue
- `(fixes #456)` - Fix Issue
- `(improves #789)` - Improve Issue
- `(refs #101)` - Reference Issue

---

## 🚀 Usage

### Standard Development Workflow
```bash
# 1. Execute standard commit after code changes
/commit

# 2. Use one-click push for quick changes
/push #301

# 3. Use fast commit for minor changes
/commit-fast

# 4. Manually supplement changelog for version release (if needed)
/changelog 2.0.1 added "Add user authentication feature (closes #301)"
```

### AI Automatic Issue Number Assignment
Claude Code intelligent assignment mechanism (specific implementation refer to `@CLAUDE.md` and `@structure.md`):
- Automatically analyze commit type and match number range
- Ensure no number conflicts, support manual specification priority

---

## 📊 Quality Assurance

### ✅ Unified Standards
- **Format Consistency**: All files use same commit message format
- **Number Unity**: Issue numbers follow unified classification system
- **Complete Examples**: Each specification includes specific usage examples
- **English Standard**: Fully English standardized for international compatibility
- **Automation Priority**: Prioritize Claude Code automatic maintenance, manual commands as supplements

### 🎯 Feature Completeness
- **Full Coverage**: Cover all Git operation scenarios in daily development
- **Flexible Configuration**: Support different complexity project requirements
- **AI Integration**: Deep integration with Claude Code intelligent features
- **Issue Management**: Complete Issue number management and automatic assignment

---

## 🔗 Related Documentation

- **Project Structure**: @structure.md - Issue number classification system
- **Development Standards**: @CLAUDE.md - AI collaboration and Git workflow
- **Usage Guide**: @README.md - Project overview and quick start
- **Task Management**: @doc/todo.md - TODO list and project management

---

## 💡 Design Philosophy

1. **Standardization**: Establish unified Git workflow standards
2. **Automation**: Maximize AI assistance, reduce manual operations
3. **Usability**: Beginner-friendly, low learning cost
4. **Traceability**: Complete Issue number tracking system
5. **Quality Assurance**: Built-in checks and standard validation

---

**🎯 Core Value**: Improve development efficiency and code quality through AI-intelligent Git workflow standards!