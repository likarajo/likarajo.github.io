---
title: "Trustworthy AI Series #3: Access Control in AI Systems"
year: "2026"
order: 12
summary: "Implementing row-level security and ensuring AI systems respect data permissions when querying databases."
draft: true
---

# Trustworthy AI Series #3: Access Control in AI Systems

## Introduction

An AI system that helps users query data must respect the same access controls as direct database queries. This post explores patterns for implementing permission-aware AI systems.

## The Challenge

Traditional database access control:
- User authentication
- Role-based permissions
- Row-level security policies

AI query systems add complexity:
- The AI service has broad database access
- Users interact with the AI, not the database directly
- Permissions must be enforced at query generation time

## TODO: Complete this article

Topics to cover:
- Row-level security implementation
- User context propagation
- Permission-aware query generation
- Audit logging for compliance
- Handling multi-tenant data

See the template in `_template-blog-post.md` for structure.

---

*Questions or comments? [Get in touch](/contact/)*
